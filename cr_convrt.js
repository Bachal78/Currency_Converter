import inqurer from "inquirer";
const currency = {
    USD: 1, //Base currency 
    EUR: 0.09,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_ansewer = await inqurer.prompt([
    {
        name: 'from',
        message: "Enter From Currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: 'to',
        message: "Enter To Currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: 'amount',
        message: "Enter your amount:",
        type: "number",
    }
]);
let fromAmount = currency[user_ansewer.from];
let toAmount = currency[user_ansewer.to];
let amount = user_ansewer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
// console.log(baseAmount)
