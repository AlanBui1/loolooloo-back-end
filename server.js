// Download the helper library from https://www.twilio.com/docs/node/install
//import twilio from "twilio";
const twilio = require("twilio");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;
// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Middleware for parsing URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.get("https://puzzle-game-api.onrender.com/send-sms", async (req, res) => {
  const message = await client.messages.create({
    body: "Hi Nathan",
    from: TO_NUMBER,
    to: FROM_NUMBER,
  });

  console.log("SENT");

  res.send("SEND");
});

app.listen(port, () => {
  console.log("STARTED");
});
