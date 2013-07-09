// Generates a random number between 1 - 100
function getRandomNum() {
    return Math.floor((Math.random() * 100) + 1);
}

var target = getRandomNum();

window.onload = function() {
	var submit = document.getElementById("submit");
  var guess = document.getElementsByTagName("input")[0].value;
  var previousGuess = 25;

  //Changes div #status based on two parameters, color and text.
  function changeStatus(color, text) {
		var status = document.getElementById("status");
      status.style.backgroundColor = color;
      status.innerHTML = text;
  }

	/* Checks whether the user's guess is equal to the target.
	If not, checks whether it is less than 25 away */
	submit.onclick = function firstGuess() {
    guess = document.getElementsByTagName("input")[0].value;
		if (guess == target) {
			changeStatus("#1EFF3F", "correct!");
		} else if (Math.abs(guess - target) < previousGuess) {
			changeStatus("#FF3630", "warmer");
		} else {
			changeStatus("#2F22FA", "colder");
		}
    previousGuess = guess;
	};

	document.getElementsByTagName("input")[0].onkeypress = function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			submit.click();
		}
	}
};