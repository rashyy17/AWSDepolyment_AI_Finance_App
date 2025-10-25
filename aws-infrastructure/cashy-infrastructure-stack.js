const cdk = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');
const ecs = require('aws-cdk-lib/aws-ecs');
const ecsPatterns = require('aws-cdk-lib/aws-ecs-patterns');
const rds = require('aws-cdk-lib/aws-rds');
const logs = require('aws-cdk-lib/aws-logs');
const secretsmanager = require('aws-cdk-lib/aws-secretsmanager');

class CashyInfrastructureStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create VPC
    const vpc = new ec2.Vpc(this, 'CashyVPC', {
      maxAzs: 2,
      natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          cidrMask: 24,
          name: 'Database',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });

    // Create database secret
    const databaseCredentials = new secretsmanager.Secret(this, 'CashyDatabaseCredentials', {
      secretName: 'cashy/database/credentials',
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: 'postgres' }),
        generateStringKey: 'password',
        excludeCharacters: '"@/\\',
      },
    });

    // Create RDS instance
    const database = new rds.DatabaseInstance(this, 'CashyDatabase', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_15,
      }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
      credentials: rds.Credentials.fromSecret(databaseCredentials),
      databaseName: 'cashy',
      deletionProtection: false, // Set to true for production
      backupRetention: cdk.Duration.days(7),
      deleteAutomatedBackups: false,
    });

    // Create application secrets
    const appSecrets = new secretsmanager.Secret(this, 'CashyAppSecrets', {
      secretName: 'cashy/app/secrets',
      secretObjectValue: {
        CLERK_SECRET_KEY: cdk.SecretValue.unsafePlainText('your-clerk-secret-key'),
        GOOGLE_GENERATIVE_AI_API_KEY: cdk.SecretValue.unsafePlainText('your-google-ai-api-key'),
        INNGEST_EVENT_KEY: cdk.SecretValue.unsafePlainText('your-inngest-event-key'),
        INNGEST_SIGNING_KEY: cdk.SecretValue.unsafePlainText('your-inngest-signing-key'),
      },
    });

    // Create ECS cluster
    const cluster = new ecs.Cluster(this, 'CashyCluster', {
      vpc,
      clusterName: 'cashy-cluster',
    });

    // Create Fargate service
    const fargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'CashyService', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('your-account-id.dkr.ecr.your-region.amazonaws.com/cashy:latest'),
        containerPort: 3000,
        environment: {
          NODE_ENV: 'production',
          NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'your-clerk-publishable-key',
          NEXT_PUBLIC_CLERK_SIGN_IN_URL: '/sign-in',
          NEXT_PUBLIC_CLERK_SIGN_UP_URL: '/sign-up',
        },
        secrets: {
          DATABASE_URL: ecs.Secret.fromSecretsManager(databaseCredentials, 'password'),
          DIRECT_URL: ecs.Secret.fromSecretsManager(databaseCredentials, 'password'),
          CLERK_SECRET_KEY: ecs.Secret.fromSecretsManager(appSecrets, 'CLERK_SECRET_KEY'),
          GOOGLE_GENERATIVE_AI_API_KEY: ecs.Secret.fromSecretsManager(appSecrets, 'GOOGLE_GENERATIVE_AI_API_KEY'),
          INNGEST_EVENT_KEY: ecs.Secret.fromSecretsManager(appSecrets, 'INNGEST_EVENT_KEY'),
          INNGEST_SIGNING_KEY: ecs.Secret.fromSecretsManager(appSecrets, 'INNGEST_SIGNING_KEY'),
        },
        logGroup: new logs.LogGroup(this, 'CashyLogGroup', {
          logGroupName: '/ecs/cashy',
          retention: logs.RetentionDays.ONE_WEEK,
        }),
      },
      memoryLimitMiB: 1024,
      cpu: 512,
      desiredCount: 1,
      publicLoadBalancer: true,
    });

    // Allow the Fargate service to connect to the database
    database.connections.allowDefaultPortFrom(fargateService.service);

    // Output the load balancer DNS name
    new cdk.CfnOutput(this, 'LoadBalancerDNS', {
      value: fargateService.loadBalancer.loadBalancerDnsName,
      description: 'DNS name of the load balancer',
    });

    // Output the database endpoint
    new cdk.CfnOutput(this, 'DatabaseEndpoint', {
      value: database.instanceEndpoint.hostname,
      description: 'RDS instance endpoint',
    });
  }
}

module.exports = { CashyInfrastructureStack };