'use strict';

// Tom object with height in Inches and Mass in Pounds
const Tom = {
    height: 9,
    mass: 8,
    // Passing anonymous function to calculate BMI
    BMI: function() {
        return (this.mass / this.height ** 2)
    }
}

// Jerry object with height in Inches and Mass in Pounds
const Jerry = {
    height: 12 / 2.54,
    mass: 45 / 454,
    // Passing anonymous function to calculate BMI
    BMI: function() {
        return (this.mass / this.height ** 2)
    }
}

// Boolean value that checks BMI state
let tomHigherBMI;

// Conditional to check BMI value
Tom.BMI() > Jerry.BMI() ? tomHigherBMI = true : tomHigherBMI = false;

// Logs TomHigherBMI state
console.log(`Is Tom’s BMI higher than Jerry’s? ${tomHigherBMI}`);
