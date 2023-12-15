//Inheritance
class Animal {
    constructor(name) {
        this.name = name;

    }

    eat() {
        console.log(`${this.name} is eating`);
    }

}

class Dog extends Animal {
    bark() {
        console.log("Woof woof!");
    }
}

class Goat extends Animal {
    meh() {
        console.log("Meh!");
    }
}

const lebron = new Goat("Lebron");
lebron.eat();
lebron.meh();
const pug = new Dog("Pug");
pug.eat();
pug.bark();