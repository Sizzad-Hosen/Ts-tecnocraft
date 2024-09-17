{
    // 
    // access modifier 

    class BankAccount {
     name:string;
     id:number;
    private balance:number;

     constructor( name:string,id:number, balance:number){
        this.name = name;
        this.id= id;
        this.balance=balance;
     }

    
  public addDeposit(amount: number) {
        this.balance = this.balance + amount;
      }
  
  public getBalance() {
        return this.balance;
      }
    }

    class Student extends BankAccount {
        constructor(name:string,id:number, balance:number){
          super(name,id,balance)
         }
    }
                                                                                        
const poorUser = new BankAccount("mir", 5, 300);

poorUser.getBalance();
// this can be used for deposite

poorUser.addDeposit(300);


// this can check total amount of balance
const myBalance = poorUser.getBalance();
console.log(myBalance);


    // 
}