# AWS Deployment Guide for Cashy Finance App

## Overview
This guide will help you deploy your Next.js AI Finance App to AWS using either ECS/Fargate or AWS App Runner.

## Prerequisites

### 1. AWS Account Setup
- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Docker installed locally
- Node.js 18+ installed

### 2. Install AWS CLI
```bash
# macOS
brew install awscli

# Configure AWS CLI
aws configure
```

### 3. Install AWS CDK (if using ECS/Fargate)
```bash
npm install -g aws-cdk
```

## Deployment Options

### Option 1: AWS App Runner (Recommended for beginners)

AWS App Runner is the simplest way to deploy your application. It automatically builds and deploys from your source code.

#### Steps:
1. **Prepare your environment variables:**
   ```bash
   cp .env.template .env.production
   # Edit .env.production with your actual values
   ```

2. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

3. **Create App Runner service via AWS Console:**
   - Go to AWS App Runner in the AWS Console
   - Click "Create service"
   - Choose "Source code repository"
   - Connect your GitHub/GitLab repository
   - Select the branch (main)
   - App Runner will automatically detect the `apprunner.yaml` configuration

4. **Configure environment variables:**
   - In the App Runner configuration, add your environment variables
   - Use AWS Systems Manager Parameter Store for sensitive values

### Option 2: ECS/Fargate (Full control)

This option gives you more control but requires more setup.

#### Steps:

1. **Set up your environment variables:**
   ```bash
   cp .env.template .env.production
   # Edit with your actual values
   ```

2. **Build and push Docker image:**
   ```bash
   ./deploy-to-aws.sh
   ```

3. **Deploy infrastructure:**
   ```bash
   cd aws-infrastructure
   npm install
   
   # Update cashy-infrastructure-stack.js with your actual values:
   # - ECR image URI from step 2
   # - Your Clerk publishable key
   # - Other configuration values
   
   # Deploy the stack
   npm run deploy
   ```

4. **Update secrets in AWS Secrets Manager:**
   - Go to AWS Secrets Manager console
   - Find the secrets created by the CDK stack
   - Update with your actual API keys and credentials

## Required Environment Variables

You'll need to obtain these values and configure them:

### Clerk Authentication
1. Go to [clerk.com](https://clerk.com)
2. Create a new application
3. Get your publishable and secret keys

### Google AI API
1. Go to [Google AI Studio](https://aistudio.google.com)
2. Create an API key
3. Add the key to your environment variables

### Inngest (for background jobs)
1. Go to [inngest.com](https://inngest.com)
2. Create an account and get your keys

### Database
- The CDK stack will create an RDS PostgreSQL instance
- Database credentials will be automatically generated and stored in AWS Secrets Manager

## Post-Deployment Steps

### 1. Database Migration
After deployment, you need to run Prisma migrations:

```bash
# Connect to your deployed application or run locally with production DATABASE_URL
npx prisma migrate deploy
npx prisma db seed  # If you have seed data
```

### 2. Test the Deployment
- Access your application via the load balancer DNS name (provided in CDK output)
- Test user registration and login
- Verify all features work correctly

### 3. Set up Custom Domain (Optional)
1. Use AWS Route 53 to configure your custom domain
2. Create an SSL certificate using AWS Certificate Manager
3. Update the load balancer to use HTTPS

## Monitoring and Logs

### CloudWatch Logs
- Application logs are available in CloudWatch
- Log group: `/ecs/cashy` (for ECS) or automatically created (for App Runner)

### Monitoring
- Set up CloudWatch alarms for:
  - High CPU usage
  - Memory usage
  - Error rates
  - Database connections

## Cost Optimization

### For Development/Testing:
- Use App Runner with automatic scaling
- Use t3.micro for RDS (free tier eligible)
- Enable deletion protection: false

### For Production:
- Use ECS Fargate with appropriate scaling policies
- Use larger RDS instances based on load
- Enable backup and monitoring
- Set up CloudFront for static assets

## Troubleshooting

### Common Issues:

1. **Docker build fails:**
   - Ensure all dependencies are in package.json
   - Check Dockerfile syntax

2. **Database connection issues:**
   - Verify security groups allow connection
   - Check DATABASE_URL format
   - Ensure RDS is in correct subnet

3. **Environment variables not working:**
   - Verify secrets are correctly configured in AWS Secrets Manager
   - Check ECS task definition has correct secret mappings

4. **Application not accessible:**
   - Check load balancer health checks
   - Verify security groups allow inbound traffic on port 80/443
   - Check application logs in CloudWatch

### Useful Commands:

```bash
# Check ECS service status
aws ecs describe-services --cluster cashy-cluster --services cashy-service

# View CloudWatch logs
aws logs describe-log-groups --log-group-name-prefix "/ecs/cashy"

# Update ECS service (after pushing new image)
aws ecs update-service --cluster cashy-cluster --service cashy-service --force-new-deployment
```

## Security Best Practices

1. **Use AWS Secrets Manager** for all sensitive data
2. **Enable VPC Flow Logs** for network monitoring
3. **Use HTTPS only** with SSL certificates
4. **Implement proper IAM roles** with least privilege
5. **Enable AWS CloudTrail** for audit logging
6. **Regular security updates** for dependencies

## Scaling

### Auto Scaling (ECS):
The CDK stack includes auto-scaling based on CPU usage. You can modify the scaling policies in the CDK code.

### Database Scaling:
- Start with t3.micro and scale up based on usage
- Consider read replicas for high-read workloads
- Monitor database performance metrics

## Support

If you encounter issues:
1. Check CloudWatch logs first
2. Verify all environment variables are set correctly
3. Test the application locally with production environment variables
4. Check AWS service status page for any ongoing issues

---

**Next Steps**: Choose your deployment option (App Runner or ECS) and follow the respective steps above.