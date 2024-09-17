{

    // probleam 01 

    let value: number | string;
    value = 10;   
    value = "10"; 

    if (typeof value === 'number') {
        const result = value * value;
        console.log(result); 
    } else if(typeof value === 'string') {
        const result = value.length;
        console.log(result);
    }
    // probem 02
    interface Person {
        phone: number | string;  
        address: {
          street: string;
          city: string;
        };
      }
      
      function getAddressCity(person: Person): string | undefined {
        return person?.address?.city;  
      }
      
      const person: Person = {
        phone: "0145000", 
        address: {
          street: "new york 5520",
          city: "new york",
        },
      };
      
      console.log(getAddressCity(person));  

    //   problem 03


class Cat {
    constructor(public name: string, public age: number) {}
  }
   
  function isCat(obj: any): obj is Cat {
    return obj instanceof Cat;
  }
  
  const jerry = new Cat('jerry', 12);

  if(isCat(jerry))
  {
    console.log("yes");
  }else{
    console.log("no")
  }

// problem 05


interface Car {
    make: string;
    model: string;
    year: number;
  }
  
  interface Driver {
    name: string;
    licenseNumber: number;
  }
  
  function combineCarAndDriver(car: Car, driver: Driver): Car & Driver {
    return {
      ...car,
      ...driver
    };
  }
  
  const myCar: Car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
  };
  
  const myDriver: Driver = {
    name: 'John Doe',
    licenseNumber: 123456
  };
  
  const combined = combineCarAndDriver(myCar, myDriver);
  console.log(combined);
  
  

//   problem 06

function isArrayOfNumbers(value: unknown): value is number[] {
    return Array.isArray(value) && value.every(item => typeof item === 'number');
  }
  
  function processValue(value: unknown): void {
    if (isArrayOfNumbers(value)) {
      const sum = value.reduce((acc, curr) => acc + curr, 0);
      console.log(`The sum of the numbers is: ${sum}`);
    } else {
      console.log('Error: The provided value is not an array of numbers.');
    }
  }
  

  processValue([1, 2, 3, 4]); 
  processValue(['a', 'b', 'c']); 

      
//   problem 07


function findFirstOccurrence<T>(array: T[], value: T): number {

    return array.indexOf(value);

}
const number = [20,50,3,0,5];
const string = ['a','b','c'];

const numberIndex = findFirstOccurrence(number,3);
const stringIndex = findFirstOccurrence(string,"a");
console.log(numberIndex);
console.log(stringIndex);

// problem 08
interface Product {
    name: string;
    price: number; 
    quantity: number;
}

function calculate(product: Product): number {
   
    const priceAsNumber = (product.price);
    return priceAsNumber * product.quantity;
}

const product: Product = {
    name: 'iPhone',
    price: 55000, 
    quantity: 1,
};

const totalCost = calculate(product);
console.log(`Total cost for ${product.name}: ${totalCost}`);


}
