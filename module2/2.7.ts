{
    // 

// contrain type of 


type Vehicale ={
    bike:string;
    car:string;
    ship:string;
}

type owner = keyof Vehicale;


const getOfValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  
  const user = {
    name: "mir",
    email: "a@j.com",
  };
  
//  obj er ekta property y that key oher property not allow

  const result = getOfValue(user, "name"); 
  console.log(result);
  
// 
}