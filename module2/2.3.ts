// generic type
{
// 
type GenericArray<T> = Array<T>;

const rollNum :GenericArray<number> = [10,2,5]
const name :GenericArray<string> = ["mir jafor"]
const boolName :GenericArray<boolean> = true;




// object 

const user : GenericArray<{name:string, age:number}> =[
    {
        name:"din",
        age:50,

    }
]


// generic tuple

type GenericTuple<x,y,z> = [x,y,z];

const men : GenericTuple<string,string,string> = ["ami","tmi",'tni'];



// 
const userId: GenericTuple<number, { name: string; email: string }> = [
    40,
    { name: "tmi", email: "tni" },
  ];
  



// 
}