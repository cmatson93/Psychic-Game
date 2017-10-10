// Set up array of letters a-z
      var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

     var winCounter = 0;
     var lossCounter = 0;
     var guessesLeft = 10;



      // Let's start by grabbing a reference to the <span> below. 
      var userText = document.getElementById("user-text");
      var winScore = document.getElementById("winScore");
      var lossScore = document.getElementById("lossScore");
      var guessesLeft = document.getElementById("guessesLeft");

     
      var computerLetter = letters[Math.floor(Math.random() * letters.length)];   // Have computer pick random letter  

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
      	var userGuess = event.key; 
      	console.log(computerLetter);
      	console.log(userGuess);
		userText.textContent = userGuess;

		if (userGuess === computerLetter) {
			winScore.textContent++;
		}

		else {
			lossScore.textContent++;
			guessesLeft.textContent -= 1;
		}

      };