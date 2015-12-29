/*
Hot or Cold Game
by Stephen Clowes

Users have to guess a number between 1 and 100.
The program will give them clues whether or not they
are getting closer.
*/

// Generates a random number between 1 - 100
var answer = Math.floor((Math.random() * 100) + 1);
var guess;
var attempts = 0;
var previousGuesses = [];
var correctGuess = false;

// Prints an array (previousGuesses) as an ordered list 
function printGuesses( guesses ) {
	var listHTML = "<ol>";
	// A for loop to index the array and create list items for each value
	for ( var i = 0; i < guesses.length; i += 1 ) {
		listHTML += "<li>" + guesses[i] + "</li>";
	}
	listHTML += "</ol>";
	document.write( listHTML );
}

// Store the button as a variable
guess = document.getElementById("guess-button");

guess.onclick = function () {
	// Functions for updating the color and previousGuesses array
}

// while ( guess !== answer ) {
//   // Change the color and text to warmer or colder
//   // Add guess to previousGuesses and write to the doc
//   // Add to the # of attempts
//   attempts += 1; 
//   // Add guess to previousGuesses array
//   previousGuesses.push(guess); 
//   // Print previousGuesses to the page
//   printList(previousGuesses);
// }