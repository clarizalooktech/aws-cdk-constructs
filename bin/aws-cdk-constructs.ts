#!/usr/bin/env node
import 'source-map-support/register'
import * as vars from '../vars'
import * as cdk from 'aws-cdk-lib'
import { SqsStack } from '../lib/sqs-stack'

const app = new cdk.App()

new SqsStack(app, 'SqsStack', {
  env: {
    account: vars.ACCOUNT_ID,
    region: vars.REGION,
  },
})
