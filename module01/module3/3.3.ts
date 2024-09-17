{
    // 
 


    // type guard
    

    const add =(params1:string | number , params2:string|number):string|number=>{
        if(typeof params1==="number" && typeof params2==="number"){
            return params1 + params2;
        }
        else if(typeof params1==="string" && typeof params2==="string"){
            return params1.toString() + params2,toString();

        }
    }
        const res1 = add(3,2);
        const res2 = add("3","5");
        
  


       // in guard

type NameUser = {
    name: string;
  };
  
  type AdminUser = {
    name: string;
    role: "admin"; 
  };
  
  const getUser = (user: NameUser | AdminUser) => {
    if ('role' in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
  
    // 


}