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


    res.send(`<h1>${Math.floor(Math.random()* number)} is your roll</h1>`)  
  }
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});


//task 3 

app.get('/collectibles/:indexNum', (req, res) => {
  let name = req.params.indexNum.name
  let price = req.params.indexNum.price

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  
  collectibles.forEach((index) => {
    res.send(`<h1>Looks like you wanted the ${index.name}?`)
  })
})