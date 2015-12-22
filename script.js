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
function printList( list ) {
	var listHTML = "<ol>";
	// A for loop to index the array and create list items for each value
	for ( var i = 0; i < list.length; i += 1 ) {
		listHTML += "<li>" + list[i] + "</li>";
	}
	listHTML += "</ol>";
	document.write( listHTML );
}

while ( guess !== answer ) {
  // Change the color and text to warmer or colder
  // Add guess to previousGuesses and write to the doc
  // Add to the # of attempts
  attempts += 1; 
  // Add guess to previousGuesses array
  previousGuesses.push(guess); 
  // Print previousGuesses to the page
  printList(previousGuesses);
}