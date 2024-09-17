{
    // 

   class Counter{
    static count:number = 0;

    static increment(){
        return (Counter.count = Counter.count +1 );

        
    }

    static decrement(){
        return (Counter.count = Counter.count - 1 );

    }
   }
    

//    const intance1 = new Counter();
//    console.log(intance1.increment())

// without intance 

console.log(Counter.increment());
    // 

}