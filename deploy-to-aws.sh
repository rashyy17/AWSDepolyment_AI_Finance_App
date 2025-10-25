#!/bin/bash

# AWS Deployment Script for Cashy Finance App
# This script will build and push your Docker image to AWS ECR and deploy using ECS

set -e

# Configuration
AWS_REGION="us-east-1"  # Change to your preferred region
ECR_REPOSITORY="cashy"
CLUSTER_NAME="cashy-cluster"
SERVICE_NAME="cashy-service"

# Get AWS Account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# Build Docker image
echo "Building Docker image..."
docker build -t $ECR_REPOSITORY:latest .

# Create ECR repository if it doesn't exist
echo "Creating ECR repository..."
aws ecr describe-repositories --repository-names $ECR_REPOSITORY --region $AWS_REGION || \
aws ecr create-repository --repository-name $ECR_REPOSITORY --region $AWS_REGION

# Get ECR login token
echo "Logging into ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Tag and push image
echo "Tagging and pushing image to ECR..."
docker tag $ECR_REPOSITORY:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest

echo "Docker image pushed successfully!"
echo "ECR URI: $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest"
echo ""
echo "Next steps:"
echo "1. Update the CDK stack with your ECR image URI"
echo "2. Deploy the infrastructure using: cd aws-infrastructure && npm install && npm run deploy"
echo "3. Update environment variables in AWS Secrets Manager"