"use strict";
// function
// arrow and normal function
function sum(num1, num2) {
    return num1 + num2;
}
sum(5, 6);
// arrow function
const add = (num1, num2) => num1 + num2;
console.log(add(5, 6));
const poorUser = {
    name: "mir",
    balance: 0,
    addBalance(balance) {
        return `my new balance is: ${this.balance + balance}`;
    }
};
console.log(poorUser.addBalance(50));
