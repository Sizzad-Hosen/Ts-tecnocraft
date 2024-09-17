
/*
1.type asssersion
2.interface
3.generic 
4.generic with interface
5.function with generic
6.constrain 
7.heneric constrain wirh keyof operator
8.asyncronous
9.conditional tyoe 
10.mapped type 
11.utilities type

*/

// type assertion


const kgToGm = (value: string | number): number => {
    let result: number;
    if (typeof value === "string") {
        result = parseFloat(value) * 1000; 
    } else if (typeof value === "number") {
        result = value * 1000; 
    } else {
        throw new Error("Invalid input type"); 
    }
    return result;
}

const res = kgToGm(1000); 
console.log(res);