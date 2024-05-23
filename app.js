import inquirer from "inquirer";
const Currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From Currency:",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter To Currency:",
        choices: ["USD", "EUR", "GBP", "PKR", "IND", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount:"
    },
]);
let fromAmount = Currency[userAnswer.from]; //exchange rate
let toAmount = Currency[userAnswer.to]; //exchange rate 
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; //USD BASE CURRENCY
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
//console.log(userAnswer);
