{
    // 


    class Person {
        name: string;
        age: number;
        address: string;
   
    
        constructor(name: string, age: number, address: string) {
          this.name = name;
          this.age = age;
          this.address = address;
        }
        getSleep(numOfHours: number) {
          console.log(`${this.name} will sleep for ${numOfHours}`);
        }
      }

class Student extends Person {
    constructor(name: string, age: number, address: string) {
       super(name, age,address);
      }


}

class Teacher extends Person{
    desination:string;
    constructor(name:string, age:number, address:string, desination:string)
    {
        super(name,age,address);
        this.desination = desination;
    };
    takeClass(num:number){
        console.log(`he take ${num} class`)
    }
}


const sizzad = new Student("sizaad", 22, "sadar");
const teacher = new Teacher("siz", 36, "sadar", "professior")

console.log(sizzad);

    // 

}