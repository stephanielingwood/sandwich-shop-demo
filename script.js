'use strict'; // make our linter happy

// inputs (parameters) - meat, cheese, bread
// work - make an html blob representing our sandwich
// outputs (return values) - the string of html

// "turkey", "pepperjack", "wheat"
// 'Here is your tasty turkey and pepperjack sandwich on wheat bread.'

// parameters
function makeSandwich(meat, cheese, bread) {
  // do work: construct a string describing the item they ordered (e.g. a sandwich, chips, etc.)
  var newSandwich = 'Here is your tasty ' + meat + ' and ' + cheese + ' sandwich on ' + bread;

  // using that string, construct a bit of html that can placed in the site
  var sandwichHtml = '<p>' + newSandwich + '</p>';

  // now, set the outputs:
  return sandwichHtml;
}

var numberOfSandwichesToMake = prompt('How many sandwiches do you want to order?');
// var counter = 0;

// while (counter < numberOfSandwichesToMake) {
//   // prompt the user for what they want in their order
//   var kindOfBread = prompt('what kind of bread do you want on your sandwich?');

//   while (kindOfBread !== 'wheat' && kindOfBread !== 'lettuce') {
//     kindOfBread = prompt('Sorry, you need to choose wheat or lettuce');
//   }

//   var kindOfMeat = prompt('what kind of meat do you want on your sandwich?');
//   var kindOfCheese = prompt('what kind of cheese do you want?');

//   var sandwich = makeSandwich(kindOfMeat, kindOfCheese, kindOfBread);

//   // then, make that bit of hmtl show up in the site
//   document.write(sandwich);

//   // counter = counter + 1;
//   // this ^^^ means the same thing as the line below
//   counter++;
// }


// this for loop, below, is a shorthand syntax of the while-loop-with-a-counter, above

for (var i = 0; i < numberOfSandwichesToMake; i++) {
  // prompt the user for what they want in their order
  var kindOfBread = prompt('what kind of bread do you want on your sandwich?');

  while (kindOfBread !== 'wheat' && kindOfBread !== 'lettuce') {
    kindOfBread = prompt('Sorry, you need to choose wheat or lettuce');
  }

  var kindOfMeat = prompt('what kind of meat do you want on your sandwich?');
  var kindOfCheese = prompt('what kind of cheese do you want?');

  var sandwich = makeSandwich(kindOfMeat, kindOfCheese, kindOfBread);

  // then, make that bit of hmtl show up in the site
  document.write(sandwich);
}
