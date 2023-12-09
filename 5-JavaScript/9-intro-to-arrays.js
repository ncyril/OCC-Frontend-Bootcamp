// Introduction to Arrays
let superheros = ["Invincible", "Black Widow", "Black Panther", "Penguin", "Shang Chi", "Spider-Gwen"];

console.log("Hero 1 is", superheros[0]);
console.log("Hero 4 is", superheros[4]);

//Index Calling
superheros[3] = "Thor";
console.log(superheros);

//Push Method - Pushes a new element at the end of an array
superheros.push("Green Lantern");
console.log(superheros);


//Pop - Removes last value in array OR what is indicated
superheros.pop("Green Lantern");
console.log(superheros);

//Array Iteration
for (let i = 0; i <= 5; i++){
    console.log("Hero", i+1, "is", superheros[i]);
}

//forEach Method - Iterates through the values in the array
superheros.forEach(function(hero) {
    console.log(hero)
});

//Array Methods
console.log("Array length is", superheros.length);
console.log("Value of Shang Chi is", superheros.indexOf("Shang Chi"));
console.log("Join Array:",superheros.join("-"));

//Slice - Slicing parts of an array out 
let slicedArray = superheros.slice(1, 4)
console.log(slicedArray);

//Splicing
let removedElement = superheros.splice(2,2);
console.log("Removed Elements:", removedElement);
console.log("Updated Array:", superheros);