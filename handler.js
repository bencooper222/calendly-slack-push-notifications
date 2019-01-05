'use strict';

const request = require('request');

module.exports.processCalendly = (event, context, callback) => {
  const calendlyInfo = JSON.parse(event.body);

  console.log(calendlyInfo);

  let slackWebhook = process.env.slackWebhook,
    interviewTime = calendlyInfo.payload.event.invitee_start_time_pretty,
    interviewStatus = calendlyInfo.event,
    name = calendlyInfo.payload.invitee.name,
    message;

  if (calendlyInfo.event === 'invitee.created') {
    const preferences = [
      calendlyInfo.payload.questions_and_responses['1_response'],
      calendlyInfo.payload.questions_and_responses['2_response'],
      calendlyInfo.payload.questions_and_responses['3_response'],
    ];

    message =
      `${interviewTime}: *${name}* - ` +
      `(${preferences[0]}, ${preferences[1]}, ${preferences[2]})` +
      '\n Please react to this message if you are free for this interview, are qualified for this interview, and are not potentially biased by the subject of this interview';
  } else if (calendlyInfo.event === 'invitee.canceled') {
    message = `${interviewTime}: *${name}* has canceled`;
  }

  if (message != null) {
    const options = {
      url: slackWebhook,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ text: message, icon_emoji: ':desktop_computer:' }),
    };

    request(options, (err, res, body) => {
      if (err) {
        throw new Error(error);
      }

      console.log(body);
    });
  } else {
  }
  const response = {
    statusCode: 200,
  };

  callback(null, response);

  /*
   * Use this code if you don't use the http event with the LAMBDA-PROXY integration
   * Callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
   */
};
