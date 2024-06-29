const express = require("express");
const app = express();

//task 1


app.get("/", (req, res) => {
  res.send("This is text");
});

app.get('/greetings', (req, res) => {
  res.send('How are ya stranger?')
})

app.get("/greetings/:username", (req, res) => {
  res.send(`I hope you have a great day ${req.params.username}`);
});

// Task 2

app.get('/roll/:number', (req, res) => {
  let number = parseInt(req.params.number);
  
  if (isNaN(number)){
    res.send(`You must specify a number.`)
  }

  if (typeof number === 'number'){


    res.send(`<h1>${Math.floor(Math.random()* number) }</h1>`)  
    console.log(`${number} is our selected number`)
  }
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
