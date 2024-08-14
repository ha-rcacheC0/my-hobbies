const rs = require('readline-sync');

// prompt name question
// prompt favorite hobby
// ask if there's more hobbies
// add hobbies to list 
// store list of user hobbies
// print user hobby list at the end

let hobbies = [];
let areYouSure = false;
let moreHobbies = 0;

const getHobbyCount = () => moreHobbies = rs.questionInt(`${favoriteHobby} is fun! How many other hobbies do you have? `);

const addHobbies = (numberOfHobbies) => {
  let counter = 0;
  while(counter < numberOfHobbies) {
    let input = rs.prompt();
    hobbies.push(input);
    counter++;
    if (counter < numberOfHobbies) {
      console.log(`Awesome ${input} is cool! What's the other ${numberOfHobbies - counter}?`);
    } else {
      console.log(`I wish I could do ${hobbies}... but I'm not even real. I'm only a prompt written by Lucas Keller.`);
    }
  }
}

let username = rs.question('What is your name? ');
let favoriteHobby = rs.question(`Hello ${username}! What is your favorite hobby? `);

hobbies.push(favoriteHobby);
getHobbyCount();

if (moreHobbies > 0) {
  console.log(`Cool, what are they? `)
  addHobbies(moreHobbies);
} else {
  areYouSure = rs.keyInYN(`Are you sure ${hobbies[0]} is all that you like to do? `);
}

if (!areYouSure && hobbies.length <= 1) {
  getHobbyCount();
  console.log(`Cool, what are they? `)
  addHobbies(moreHobbies);
} else if (areYouSure) {
  console.log(`${hobbies} is cool, good for you!`)
}