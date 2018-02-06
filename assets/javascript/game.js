//Initialize scores
var totalScore = 0;
var wins = 0;
var losses = 0;

//Initialize crystal number assignments
var blue;
var green;
var red;
var yellow;

//Initialize target number
var randomTargetNumber;

//Initialize target number and crystal number arrays
targetNumber = [];
crystalNumbers = [];

//Create an array of possible random target numbers from 19-120
function target() {
    for (var i = 19; i < 121; i++) {
        targetNumber.push(i);
    }

//Create an array of crystal values from 1-12
    for (var i = 1; i < 13; i++) {
        crystalNumbers.push(i);
    }

//Assign random numbers to each crystal
    blue = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    green = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    yellow = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    red = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];

//Get random target number
    randomTargetNumber = targetNumber[Math.floor(Math.random() * targetNumber.length)];

//Write target number to browswer
    $("#target-number").text(randomTargetNumber);
}

//Call target function
target();

//Check to see which crystal the user chose and add that crystal's value to the user's total score
$(".crystal-value").on("click", function () {
    var color = ($(this).attr("attr"));
    
    if (color === "blue") {
        totalScore += blue
    } else if (color === "yellow") {
        totalScore += yellow
    } else if (color === "red") {
        totalScore += red
    } else if (color === "green") {
        totalScore += green
    }

//Write user score to browswer
    $("#total-score").text(totalScore);

 //If user loses game  - add 1 to games lost, change score to 0, update browswer, call function to initialize  
    if (totalScore > randomTargetNumber) {
        losses++;
        totalScore = 0;
        $("#user-losses").text(losses);
        $("#total-score").text(totalScore);

        target();

//If user wins game  - add 1 to games won, change score to 0, update browswer, call function to initialize        
    } else if (totalScore === randomTargetNumber) {
        wins++;
        totalScore = 0;
        $("#user-wins").text(wins);
        $("#total-score").text(totalScore);

        target();
    }
});
