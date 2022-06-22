require("dotenv").config();
var messagebird = require("messagebird")(process.env.LIVE_API_KEY);

messagebird.conversations.webhooks.create(
  {
    events: ["message.created"],

    url: process.env.WEBHOOK_SITE,
    settings: {
      retry: 2,
    },
  },
  function (err, response) {
    if (err) {
      return console.log(err);
    }
    console.log(response);
  }
);
