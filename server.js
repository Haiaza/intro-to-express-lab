const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is text");
});

app.get('/greetings', (req, res) => {
  res.send('How are ya stranger?')
})

app.get("/greetings/:username", (req, res) => {
  res.send(`I hope you have a great day ${req.params.username}`);
});

//task 1


app.get('/roll/:number', (req, res) => {
  let number = parseInt(req.params.number);
  
  if (typeof number === 'number'){
    res.send(`Number detected`)
  }
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});