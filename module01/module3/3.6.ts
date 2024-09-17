{
    // getter and setter
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      set deposit(amount: number) {
        this._balance = this.balance + amount;
      }
      // public addDeposit(amount: number) {
      //   this._balance = this._balance + amount;
      // }
  
      //getter
      get balance() {
        return this._balance;
      }
      // public getBalance() {
      //   return this._balance;
      // }
    }
  
    const poorUser = new BankAccount(111, "Mr. gorib", 50);
  
    // poorUser.deposit = 0;
    // poorUser.addDeposit(20); // function call korte hsse
    poorUser.deposit = 50;
    // const myBalance = poorUser.getBalance(); // function call korte hsse
  
    const myBalance = poorUser.balance; // property er mto kore
    console.log(myBalance);
  
    //
  }
  