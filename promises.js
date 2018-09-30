// 1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
const testNum = num => {
  if (num > 10) {
    return Promise.resolve(`${num} is greater than 10, success!`);
  } else {
    return Promise.reject(`${num} is less than 10, error!`);
  }
};

testNum(18)
  .then(result => console.log(result))
  .catch(err => console.log(err));

testNum(5)
  .then(result => console.log(result))
  .catch(err => console.log(err));

// 2. Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

const makeAllCaps = words => {
  const allStrings = words.every(word => typeof word === 'string');
  if (allStrings) {
    return Promise.resolve(words.map(word => word.toUpperCase()));
  } else {
    return Promise.reject(
      'No, the array you passed in contained an element that was not a string!'
    );
  }
};

const sortWords = words => {
  return Promise.resolve(words.sort());
};

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// What is .then() used for, and what is .catch() used for?
// .then() is used for waiting for successful data to comeback so that you can then perform operations with that data

// .catch() is used for catching and letting the user know that an error has occured with the operation and the promise has not returned the correct data

// What are good use cases for Promises?
// Promises are great for any time we need to handle asynchronus code, in other words, when we need to wait for something to happen before we can move onto the next step. Some examples of this include, when we need to wait for data to come back from an API, or if we're waiting for a timer to finish before executing an operation.

// What other libraries/functions can you find that use Promises?
// Typically promises are used with fetch or any other library used to fetch API data such as axios. We will also have to occasionaly use promises on the back end when were waiting for data to come back from the database. Whenever we're posting data to an api or to a database we'll have to use promises to see if the response was ok before moving on.
