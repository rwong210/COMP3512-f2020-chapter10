const stocks = [{
    symbol: "AMZN",
    name: "Amazon",
    price: 23.67,
    units: 59
  },
  {
    symbol: "AMT",
    name: "American Tower",
    price: 11.22,
    units: 10
  },
  {
    symbol: "CAT",
    name: "Caterpillar Inc",
    price: 9.00,
    units: 100
  },
  {
    symbol: "APPL",
    name: "Amazon",
    price: 234.00,
    units: 59
  },
  {
    symbol: "AWK",
    name: "American Water",
    price: 100.00,
    units: 10
  }
];

// your solutions here

//1. regular loop
for (let stock of stocks) {
  let amt = function () {
    return stock.price * stock.units;
  }
  stock.total = amt;
};
console.log(stocks[0].total());

//1. forEach method
stocks.forEach(stock => {
  let amt = () => stock.price * stock.units;
  stock.total = amt;
});
console.log(stocks[1].total());

//2. regular loop
for (stock of stocks) {
  if (stock.symbol == "CAT") {
    console.log(stock);
  }
}

//2. find method
console.log(stocks.find(stock => stock.symbol == "CAT"));

//3. regular loop
const stocks2 = [];

for (stock of stocks) {
  if (stock.price > 0 && stock.price < 20) {
    stocks2.push(stock);
  }
}
console.log(stocks2);

//3. filter function
const stocks3 = stocks.filter(stock => stock.price > 0 && stock.price < 20);
console.log(stocks3)

//4. regular loop
const strings = [];

for (stock of stocks){
  strings.push(`<li>${stock.name}</li>`);
}

console.log(strings);

//4. map method
const strings2 = stocks.map( stock => `<li>${stock.name}</li>`);
console.log(strings2);

//5. sort method
function compare(a,b){
  if (a.symbol < b.symbol){
    return -1;
  }else if
    (a.symbol > b.symbol){
      return 1;
  }
  return 0;
}

console.log(stocks.sort(compare));