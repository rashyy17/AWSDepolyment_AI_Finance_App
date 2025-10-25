#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { CashyInfrastructureStack } = require('./cashy-infrastructure-stack');

const app = new cdk.App();
new CashyInfrastructureStack(app, 'CashyInfrastructureStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});