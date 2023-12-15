//Encapsulation
class BankAccount {
    //Constructor method to initialize properties
    constructor(name, accountNumber, balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    //Methods
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
        }
    }

    getAccountInfo() {
        return `Name: ${this.name}, Account number: ${this.accountNumber}, Balance: ${this.balance}`;
    }
}

//Instantiate an object
const myAccount = new BankAccount("John", 123456789, 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getAccountInfo());

const ninaAccount = new BankAccount("Nina", 987654321, 500);
ninaAccount.deposit(1000);
ninaAccount.withdraw(200);
console.log(ninaAccount.getAccountInfo());