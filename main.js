// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  let total = 0;
  // console.log('TOTAL', total);
  // Answer:
  for (let i = 0; i < data.length; i++) {
    // console.log('allthethings', data[i].price);
    total += data[i].price;
    // console.log('TOTAL', total);
  }
  // console.log('datalength', data.length);
  let avg = total / data.length;
  console.log('The average price is ', avg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  //Answer:

  let arrayBetween = [];

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    data[i].price
    // console.log(data[i].price);
    if (data[i].price >= 14 && data[i].price <= 18) {
      // console.log(data[i].price >= 14 && data[i].price <= 18)
      arrayBetween.push(data[i].title);
    }
  }
  console.log('is this the object', arrayBetween);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let nameNprice = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      nameNprice.push(data[i].title, data[i].price)
    }
  }
  console.log(nameNprice[0], " costs ", nameNprice[1], " pounds. ");
}



// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let woodItems = [];

  for (let i = 0; i < data.length; i++) {
    for (let m = 0; m < data[i].materials.length; m++) {
      // console.log(data[i].materials[m]);
      if (data[i].materials[m] === "wood") {
        woodItems.push(data[i].title);
      }
    }
  }
  console.log(woodItems);
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
