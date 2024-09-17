// Using type alias
type User1 = {
    name: string;
    age: string;
};

// Using interface
interface User2 {
    name: string;
    age: string;
}

// Extending using type alias
type UserWithRole = User1 & { role: string };

// Extending using interface
interface UserWithRoleInterface extends User2 {
    role: string;
}

// Now correctly assigning the types
const user1: UserWithRole = {
    name: "nir",
    age: "20",
    role: "admin",
};

const user2: UserWithRoleInterface = {
    name: "nir",
    age: "20",
    role: "admin",
};


// array interface abd type alias

type Roll1 = number [];

interface Roll2 {
    [index: number] : number;
}
    const rollNumber : Roll2 = [1,2,5];



    interface Add2 {
        (num1: number, num2: number): number;
    }
    
    const add: Add2 = (num1, num2) => num1 + num2;

    const result = add(10, 20); 
    console.log(result);
