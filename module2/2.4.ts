// generic with interface

interface Delveloper<T> {
    name: string;
    email: string;
    age: number;
    pc: {
        brand: string;
        model: string;
    };
    smartWatch: T;
}

interface appleWatch {
    brand: string;
    model: string;
}

const poorDeveloper : Delveloper<{
      brand:string;

}>={
    name:"sizaad",
    email:"s@gmasil.com",
    age:22,
    pc:{
 brand : "asus",
 model:"i5 12gen"

    },

    smartWatch:{
        brand:"poor"
    }
}

const richDeveloper : Delveloper<appleWatch>={
    name:"sizaad",
    email:"s@gmasil.com",
    age:22,
    pc:{
 brand : "asus",
 model:"i5 12gen"

    },

    smartWatch:{
        brand:"poor",
        model:"apple"
    }
}