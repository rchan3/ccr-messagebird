require("dotenv").config();
var messagebird = require("messagebird")(process.env.LIVE_API_KEY);

var params = {
  to: process.env.TEST_PHONE_NUMBER,
  from: process.env.WHATSAPP_CHANNEL_ID,
  type: "text",
  content: {
    text: "Hello!",
    disableUrlPreview: false,
  },
};

messagebird.conversations.send(params, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});
