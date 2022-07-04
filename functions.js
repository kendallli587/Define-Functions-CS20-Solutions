// DEFINE YOUR FUNCTIONS IN THIS FILE, BASED ON THE PROVIDED CRITERIA
// Criteria Link:
// https://docs.google.com/document/d/1SVVtPcuKR-Ue8wqsUKcSwSB9nbpoL9ui2FSGSn32Zdg/edit?usp=sharing

// GREETING
// Return greeting based on provided name and time of day
function greeting(name, timeOfDay) {
    return `Hello ${name}. Have a great ${timeOfDay}!`;
}


// HERON'S FORMULA
// Return area of triangle with provided side lengths
function heronsFormula(sideA, sideB, sideC) {
    let s = (sideA + sideB + sideC) / 2;
    return Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    // Can just return value rather than create variable and return area
}


// WITHIN RANGE
// Test if provided number is within given range
function withinRange(n, low, high) {
    return n >= low && n <= high;
}


// FAHRENHEIT TO CELSIUS
// Return provided fahrenheit temperature in celsius
function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) * 5 / 9;
}


// DISTANCE
// Return distance between (x1, y1) and (x2, y2)
function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}


// ANALYZE NUMBER
// Test if provided number is positive, negative or zero
function analyzeNumber(n) {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    } else {
        return "zero";
    }
}


// VALID USERNAME
// Test if username is between 3 and 8 characters, inclusive.
function validUsername(username) {
    let strLength = username.length;
    return strLength >= 3 && strLength <= 8;

    // Simpler versions
    // return withinRange(username.length, 3, 8);
}
