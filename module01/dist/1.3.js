"use strict";
// function
// arrow and normal function
function sum(num1, num2) {
    return num1 + num2;
}
sum(5, 6);
// arrow function
var add = function (num1, num2) { return num1 + num2; };
console.log(add(5, 6));
var poorUser = {
    name: "mir",
    balance: 0,
    addBalance: function (balance) {
        return "my new balance is: ".concat(this.balance + balance);
    }
};
console.log(poorUser.addBalance(50));
