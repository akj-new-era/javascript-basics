const cowsay = require("cowsay");

const Quote = require("inspirational-quotes");

let idea = Quote.getRandomQuote();

console.log(
  cowsay.say({
    text: idea,
    e: "xx",
    T: "U",
  })
);