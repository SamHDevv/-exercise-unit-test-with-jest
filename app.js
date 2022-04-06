let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDollarIs = {
    "JPY": 106.6
}

let oneYenIs = {
    "GBP": 159.9
}

// this is my function that sums two numbers
const fromEuroToDollar = (a) => {
    return a * oneEuroIs.USD;
}

const fromDollarToYen = (a) => {
    return Math.Round(a * oneDollarIs.JPY);
}

const fromYenToPound = (a) => {
    return a * oneYenIs.GBP;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromEuroToDollar };