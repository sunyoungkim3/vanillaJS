const quotes = [
  {
    quote: "aaa",
    author: "aaabbb",
  },
  {
    quote: "bbb",
    author: "aaafdsfdsbbb",
  },
  {
    quote: "ccc",
    author: "aadsaaabbb",
  },
  {
    quote: "ddd",
    author: "ssssaaabbb",
  },
  {
    quote: "eee",
    author: "fffffaaabbb",
  },
  {
    quote: "fff",
    author: "gggaaabbb",
  },
  {
    quote: "aaa",
    author: "aaabbb",
  },
  {
    quote: "bbb",
    author: "aaafdsfdsbbb",
  },
  {
    quote: "ccc",
    author: "aadsaaabbb",
  },
  {
    quote: "ddd",
    author: "ssssaaabbb",
  },
  {
    quote: "eee",
    author: "fffffaaabbb",
  },
  {
    quote: "fff",
    author: "gggaaabbb",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[randomNum].quote;
author.innerHTML = quotes[randomNum].author;
