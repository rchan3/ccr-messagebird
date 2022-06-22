require("dotenv").config();
var messagebird = require("messagebird")(process.env.LIVE_API_KEY);

var params = {
  to: process.env.TEST_PHONE_NUMBER,
  from: process.env.WHATSAPP_CHANNEL_ID,
  type: "text",
  content: {
    text: "testing420",
    disableUrlPreview: false,
  },
};

messagebird.conversations.send(params, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});

// list conversations
messagebird.conversations.list(20, 0, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});
