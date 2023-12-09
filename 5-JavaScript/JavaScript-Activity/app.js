// Initialize the variable to store the score entered by the user
let score;

// Loop to continually prompt the user for a valid score input
while (true) {
    // Prompt the user to enter the score and converts the input to an integer
    let input = prompt("Enter the score: ");
    score = parseInt(input);

    // Check if the input is a valid number
    if (!isNaN(score)) { 
        break; // Exit the loop if a valid number is entered
    } else {
        console.log("Please enter a valid number for the score.");
    }
}

// Grading logic based on the entered score
if (score < 60) {
    console.log(`The grade for the score ${score} is: F`);
} else if (score >= 60) {
    console.log(`The grade for the score ${score} is: D`);
} else if (score >= 70) {
    console.log(`The grade for the score ${score} is: C`);
} else if (score >= 80) {
    console.log(`The grade for the score ${score} is: B`);
} else {
    console.log(`The grade for the score ${score} is: A`);
} 