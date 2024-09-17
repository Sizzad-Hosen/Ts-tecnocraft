// function

// arrow and normal function
function sum(num1:number, num2:number){
    return num1 + num2;
}

sum(5,6);

// arrow function
const add = (num1: number, num2: number): number => num1 + num2;

console.log(add(5, 6)); 



const poorUser = {
    name: "mir",
    balance: 0,
    addBalance(balance: number): string {
        return `my new balance is: ${this.balance + balance}`;
    }
};

console.log(poorUser.addBalance(50));
