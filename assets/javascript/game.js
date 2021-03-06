
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/audio/SciFi DSL02_28_1.mp3");

// plays a SFX when the Jpeg is clicked 
$(".fortune-teller").on("click", function () {
    audioElement.play();
});
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

//creating variables to track specific game stats and info
var wins = 0;
var losses = 0;
var remainingTurns = 10;
var guessedAnswers = [];
var computerChoice;


//creating variables to link to my <p> elements
var userText = document.getElementById("you-answered");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingGuessesSpan = document.getElementById("remaining-guesses");
var guessedSoFar = document.getElementById("guessed");

var gameInit = function () {
    remainingTurns = 10;
    guessedAnswers = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    userText.textContent = "Choose A Letter To Start The Game";
    
    
}

var guessesReset = []
// creating a variable called computerChoice and setting the value to a random letter thru the math random * the length of the alphabet array
gameInit();
// telling the console to log the computers choice
console.log("The Computer Chose: " + computerChoice);

// this will listen for the user to press and let go of a key

document.onkeyup = function (event) {
    guessedSoFar.textContent = "you guessed so far " + guessedAnswers;
 
    console.log(event.key);
    console.log(userText);
    
    userText.textContent = "You Just Answered - " + event.key;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    
    
    var userGuess = event.key;
    
    guessedAnswers.push(userGuess)
    
    //TRYING to say if the computer and the user guess the same letter, increment the wins, BUT THIS WONT WORK
    if (computerChoice === userGuess) {
        console.log(wins);
        
        alert("Wow!!!, You Guessed It! Great Job!")
        wins++;
        gameInit();
        winsText.textContent = "Wins: " + wins;
        console.log(wins);
        guessesReset
        
        console.log("The Computer Chose: " + computerChoice);
    }
    // if user did not guess the same as the computer, subtract one from the remaining turns
    else {
        remainingTurns--;
        remainingGuessesSpan.textContent = remainingTurns;
        
        console.log("The Computer Chose: " + computerChoice);
        console.log(remainingTurns);
        
        if (remainingTurns === 0) {
            losses++;
            gameInit();
            
        }

       
       
        
    } 
}







