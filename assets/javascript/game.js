// Set up array of letters a-z
      var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

     var guessesLeft = 10;
     var alreadyGuessedArray =[];



      // Let's start by grabbing a reference to the <span> below. 
      var userText = document.getElementById("user-text");
      var winScore = document.getElementById("winScore");
      var lossScore = document.getElementById("lossScore");
      var guessesLeft = document.getElementById("guessesLeft");
      var alreadyGuessed = document.getElementById("guessesDisplayed")

        // Have computer pick random letter  
      // console.log(i);  
      
      // create a loop that will run until user guesses correctly or tries are out
      
      var computerLetter = letters[Math.floor(Math.random() * letters.length)];
      	// Next, we give JavaScript a function to execute when onkeyup event fires.
      	
		document.onkeyup = function(event) {
		  	var userGuess = event.key; 
		  	console.log(computerLetter);
		  	console.log(userGuess);
				userText.textContent = userGuess;
			if (userGuess === computerLetter) {
				winScore.textContent++;
				alert("You got it right!");
				guessesLeft.textContent = 10;
				alreadyGuessedArray = [];
				computerLetter = letters[Math.floor(Math.random() * letters.length)];

			}

			else  {
				guessesLeft.textContent -= 1;
				alreadyGuessedArray.push(userGuess);
				alreadyGuessed.textContent = alreadyGuessedArray;
				// for (var i =0; i<alreadyGuessedArray.length; i++) {
				// 	alreadyGuessed.textContent = alreadyGuessedArray[i];
				// }
				if (guessesLeft.textContent <= 0) {
					lossScore.textContent ++;
					alreadyGuessedArray = [];
					guessesLeft.textContent = 10;
					computerLetter = letters[Math.floor(Math.random() * letters.length)];
				}
			} 
		}
  

      