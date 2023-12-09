const person = {
    firstName: "John",
    lastName: "Wick",
    nickname: "Baba Yaga",
    age: 30,
    height: 6.1,
    hobbies: ["languages", "cars", "suits", "animals"],

    //Method
    greet: function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

//Dot notation
console.log(person.firstName);
console.log(person.hobbies);

person.greet();

//Adding new properties
person.nationality = "American";
console.log(person.nationality);

//Adding new methods
person.talkHobbies = function(){
    console.log(`I like ${this.hobbies[3]}`);
}
person.talkHobbies();

//OOP = Object Oriented Programming
const movie = {
    title: "John Wick 2",
    year: 2023,
    actors: ["Keanu Reeves", "Hugo Weaving", "Lupita Nyong'o"],
    plot: "John Wick is on the run after killing a member of the international assassins guild, and before he has a chance to pull off his biggest heist yet.",
}

person.favoriteMovie = movie;
console.log(person.favoriteMovie.title);

//Destructuring objects
// const lastName = person.lastName;
// const nickname = person.nickname;
// const height = person.height;

const {lastName, nickname, age} = person;
console.log(lastName, nickname, age);

const{height} = person;
console.log(height);
