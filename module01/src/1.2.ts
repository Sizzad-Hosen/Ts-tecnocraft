// non premitive type 

const friend01 : string[] = ["rasel", 'rana']
const friend02 : string[] = ["moasel", 'tana'];

friend01.push(...friend02);

console.log(friend01);


// tuple array 

let coordinates : [number, number] = [1,5];

const ageName : [number , string, number] = [50,'sizzad',6];


// refreance type


const user :{
    firstName:string,
    lastName:string,
    midName:string,
    isMarried:boolean
}={
    firstName:"sizzad",
    lastName:"hosen",
    midName:"ul",
    isMarried:true,

}



// acess the element 


console.log(user.midName);

