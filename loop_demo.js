// representing my loops in code

// three pieces of info to make our loop work:
// the initial value checked in the condition
// condition
// some way to update the initial value

// plus the work that is done if the condition is true

var lightColor = prompt('What color is the light?');

while (lightColor === 'red') {
  console.log('I am stopped at the light');
  lightColor = prompt('What color is the light now?');
}

console.log('Gooooooooo!!!!!!');
