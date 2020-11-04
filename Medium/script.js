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
const userResponse = prompt("Enter a number between 1 - 12");

// Utilize explicit coercion to convert the user input into a number
const responseAsNumber = parseInt(userResponse);

// Checks if the value is within range of 1 and 12
if (responseAsNumber >= 1 && responseAsNumber <= 12) {
  console.log(months[responseAsNumber - 1]); // Faster!
} else {
  // If the user inputted value is not within the correct range throw and error
  console.log("Error: Please enter a number between\n1 - 12");
}
