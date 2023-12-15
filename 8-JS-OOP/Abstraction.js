//Abstraction

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        return `${this.make} ${this.model} is started`
    }
    stop() {
        `${this.make} ${this.model} is stopped`
    }
}

const myCar = new Vehicle('Toyota', 'Camry')
console.log(myCar.start);
console.log(myCar.stop);