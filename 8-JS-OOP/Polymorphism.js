//Polymorphism
class Animal {
    makeSound() {
        return 'Makes the sound:';
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ' Woof!';
    }
}

const dog = new Dog();
console.log(dog.makeSound());