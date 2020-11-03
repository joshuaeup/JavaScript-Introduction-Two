"use strict";

// Object array to hold months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Receives user input
let userResponse = prompt("Enter a number between 1 - 12");

// Utilize explicit coercion to convert the user input into a number
let responseAsNumber = parseInt(userResponse);

// Checks if the value is within range of 1 and 12
if (responseAsNumber >= 1 && responseAsNumber <= 12) {
  // loops through all items in months array
  for (let i = 0; i < months.length; i++) {
    // If the user inputted number is equal to the array index + 1 then log the index value
    // meaning if the index starts at 0 the value checked is 1 etc...
    if (responseAsNumber === i + 1) {
      console.log(months[i]);
    }
  }
} else {
  // If the user inputted value is not within the correct range throw and error
  console.log("Error: Please enter a number between\n1 - 12");
}
