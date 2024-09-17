
// unior and intersection type

// unior that means | to understand

// type FrontedDeveloper = "fokirDeveloper" | "juniorDeveloper";
// type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

// type Developer = FrontedDeveloper | FullStackDeveloper;

// intersection 

type FrontedDeveloper ={
    skills:string[],
   desinations01:"FrontendDeveloper"
}

type BackendDeveloper ={
    skills:string[],
   desinations02:"BackendDeveloper"
}

type FullStackDeveloper =  FrontedDeveloper & BackendDeveloper;

const fullstactDeveloper : FullStackDeveloper = {
     skills:["html",'js', ' express','node js'],
      desinations01:"FrontendDeveloper",
        desinations02:"BackendDeveloper"
}