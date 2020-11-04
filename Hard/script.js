"use strict";

function calculateBMI(mass, height) {
  return mass / height ** 2;
}

// Tom object with height in Inches and Mass in Pounds
const Tom = {
  height: 9,
  mass: 8,
  // Passing anonymous function to calculate BMI
  BMI: function () {
    return calculateBMI(this.mass, this.height);
  },
};

// Jerry object with height in Inches and Mass in Pounds
const Jerry = {
  height: 12 / 2.54,
  mass: 45 / 454,
  // Passing anonymous function to calculate BMI
  BMI: function () {
    return calculateBMI(this.mass, this.height);
  },
};

// Conditional to check BMI value
let tomHigherBMI = Tom.BMI() > Jerry.BMI();

// Logs TomHigherBMI state
console.log(`Is Tom’s BMI higher than Jerry’s? ${tomHigherBMI}`);
