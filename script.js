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
var correctGuess = false;


while ( guess !== answer ) {
  // change the color and text to warmer or colder
  // add guess to previousGuesses and write to the doc
  attempts +=1;
}