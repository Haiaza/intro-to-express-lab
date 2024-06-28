const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is text");
});

app.get('/greetings', (req, res) => {
  res.send('Nice shot!')
})

app.get("/greetings/:username", (req, res) => {
  res.send(`I hope you have a great day ${req.params.username}`);
});

app.get('/roll/:number', (req, res) => {
  req =  parseInt(req)
  if (typeof req.params.number === 'number'){
    console.log('Number detected')
  }
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
