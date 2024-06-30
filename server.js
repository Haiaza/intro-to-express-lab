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

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
index = req.params.indexNum


if (isNaN(req.params.indexNum) || req.params.indexNum >= collectibles.length || req.params.indexNum < 0)  {
  res.send(`<h1>This item is not yet in stock. Check back soon!</h1>`)
}

res.send(`<h1>Looks like you wanted the '${collectibles[index].name}'? For the low price of $${collectibles[index].price} it's all yours!</h1>`)

})


// task 4





app.get('/shoes', (req, res) => {

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  let name = req.query.name
  let price = req.query.price 
  let type = req.query.type  





//grave yard

  // switch (req.query) {
  //   case 'min-price':
  //     output = 'MIN PRICE';
  //     break;
  //   case 'max-price':
  //     output = 'MAX PRICE';
  //     break;
  //   case 'type':
  //     output = 'TYPE';
  //     break;
  //   case '':
  //     output = 'None';
  //     break;
  //   default:
  //     console.log('???')
  //     output = 'Test message'
  // }