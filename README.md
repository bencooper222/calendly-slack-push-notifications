# calendly-slack-push-notifications

## Config
1. Change the service name in serverless.yml
2. Feel free to change the name of the function (currently `passOn`)
3. [Get a Slack webhook URL](https://api.slack.com/incoming-webhooks) 
4. `serverless deploy` in terminal ([must have AWS credentials already setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/) and installed serverless from npm/yarn/pnpm)
5. [Change the environment variable](https://docs.aws.amazon.com/lambda/latest/dg/env_variables.html) `slackWebhook` in Lambda to the URL from step 3 
5. [Get your Calendly API token](https://developer.calendly.com/docs/getting-your-authentication-token). Your account must be *at least* premium. 
6. Take the URL for your function (can be found in your terminal output from step 4. Alternatively, you can put your function behind Cloudfront or similar) and [create a webhook subscription in Calendly](https://developer.calendly.com/docs/webhook-subscriptions)
7. Test it out! It should work now

## License
MIT License. 