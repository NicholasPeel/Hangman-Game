

var wordArray = ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia",
"hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","maryland",
"massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada","new hampshire","new jersey",
"new mexico","new york","north carolina","north dakota","ohio","oklahoma","oregon","pennsylvania","rhode island","south carolina",
"south dakota","tennessee","texas","utah","vermont","virginia","washington","west virginia","wisconsin","wyoming"];

var randWord = "";
var wordHidden = [];
var letter = "";
var remainingGuesses = 7;
var lettersGuessed = [];
var correctGuess = false;
var wins = 0;
var lose = 0;
var gotWord = false;
var pushLetter = true;


function getWord(){

	remainingGuesses = 7;
	document.getElementById("remainingGuess").innerHTML = remainingGuesses;

	lettersGuessed = [];
	document.getElementById("guess").innerHTML = lettersGuessed;

	document.getElementById("hangmanImage").src = "assets/images/hangman1.png";

	randWord = "";

	randWord = wordArray[Math.floor(Math.random() * 50)];

	wordHidden = [];

	pushLetter = true;

	for (var i = 0; i < randWord.length; i++) {
		
		if (randWord[i] === " ") {

			wordHidden[i] = " ";

		}else{

			wordHidden[i] = "_" ;

		}
	}

	document.getElementById("word").innerHTML = wordHidden.join(" ");

	gotWord = true;
	
}

	document.onkeyup = function(event){

		if (gotWord === true) {

			compareGuess();

		}
	}


function compareGuess(){

	correctGuess = false;
	letter = event.key;

	for (var i = 0; i < randWord.length; i++) {

		if (letter === randWord[i]) {

			wordHidden[i] = letter;
			document.getElementById("word").innerHTML = wordHidden.join(" ");
			correctGuess = true;
			
		}
	}
	if (randWord === wordHidden.join("")) {

		 	wins += 1;
		 	console.log(wins);
		 	document.getElementById("win").innerHTML = wins;

		 	$('#winModal').modal(focus);

		 	pushLetter = false;

		 	gotWord = false;

	}

	if(correctGuess === false) {

		remainingGuesses -= 1;
		document.getElementById("remainingGuess").innerHTML = remainingGuesses;

		switch(remainingGuesses){

			case 6:

		 		document.getElementById("hangmanImage").src = "assets/images/hangman2.png"; 
		 		break;

		 	case 5:

		 		document.getElementById("hangmanImage").src = "assets/images/hangman3.png"; 
		 		break;

		 	case 4:

		 		document.getElementById("hangmanImage").src = "assets/images/hangman4.png"; 
		 		break;

		 	case 3:

		 		document.getElementById("hangmanImage").src = "assets/images/hangman5.png"; 
		 		break;

		 	case 2:

		 		document.getElementById("hangmanImage").src = "assets/images/hangman6.png"; 
		 		break;

		 	case 1:

		 		document.getElementById("hangmanImage").src = "assets/images/hangman7.png"; 
		 		break;

		 	case 0:

		 		document.getElementById("hangmanImage").src = "assets/images/hangman8.png";
		 		break;

		 }

		if (remainingGuesses === 0) {

			lose += 1;
			document.getElementById("loss").innerHTML = lose;
	

			$('#loseModal').modal(focus)

			pushLetter = false;

			gotWord = false;

		}

	}

	if (pushLetter === true) {

		lettersGuessed.push(letter);
		document.getElementById("guess").innerHTML = lettersGuessed;

	}
}

function quitGame(){

	gotWord = false;

}










