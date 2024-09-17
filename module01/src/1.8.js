"use strict";
// ternary operator , optional channing , nulllish coalercing operator
{
    const age = 15;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
}
const isAdult = age >= 18 ? "adult" : "notadult";
//  nulish coacing operator 
//   this operator null and undefined upor dicition making kore
// const isAuth = null;
// const result = isAdult ? "guest";
// nullable type
const searchName = (value) => {
    if (value) {
        console.log("ase data");
    }
    else {
        console.log("not found");
    }
};
searchName(null);
searchName("John");
// unknown type 
const getSpeedInMeterPerSecond = (value) => {
    if (typeof value === "number") {
        const convertSpeed = value * 100;
        console.log(convertSpeed);
    }
    else if (typeof value === "string") {
        const [result, unit] = value.split(' ');
        const convertedSpeed = (parseFloat(result) * 100) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    else {
        console.log("Invalid input type");
    }
};
getSpeedInMeterPerSecond(10); // Output: 1000
getSpeedInMeterPerSecond("50 km/h"); // Output: The speed is 1.3888888888888888 ms^-1
getSpeedInMeterPerSecond(true); // Output: Invalid input type
