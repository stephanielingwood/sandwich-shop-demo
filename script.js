'use strict'; // make our linter happy

// inputs (parameters) - meat, cheese, bread
// work - make an html blob representing our sandwich
// outputs (return values) - the string of html

// "turkey", "pepperjack", "wheat"
// 'Here is your tasty turkey and pepperjack sandwich on wheat bread.'

                        // parameters 
function makeSandwich (meat, cheese, bread) {
  // do work: construct a string describing the item they ordered (e.g. a sandwich, chips, etc.)
  var newSandwich = 'Here is your tasty ' + meat + ' and ' + cheese + ' sandwich on ' + bread;
  
  // using that string, construct a bit of html that can placed in the site
  var sandwichHtml = '<p>' + newSandwich + '</p>';
  
  // now, set the outputs: 
  return sandwichHtml; 
}

// prompt the user for what they want in their order
var kindOfMeat = prompt('what kind of meat do you want on your sandwich?');
var kindOfCheese = prompt('what kind of cheese do you want?');
var kindOfBread = prompt('what kind of bread do you want on your sandwich?');

var sandwich = makeSandwich(kindOfMeat, kindOfCheese, kindOfBread);

// then, make that bit of hmtl show up in the site
document.write(sandwich);

var wantsAnother = prompt('Do you want another sandwich?');

if (wantsAnother === 'yes') {
  // prompt the user for what they want in their order
  var meat2 = prompt('what kind of meat do you want on your second sandwich?');
  var cheese2 = prompt('what kind of cheese do you want on your second sandwich?');
  var bread2 = prompt('what kind of bread do you want on your second sandwich?');

  var secondSandwich = makeSandwich(meat2, cheese2, bread2);

  // then, make that bit of hmtl show up in the site
  document.write(secondSandwich);
}

