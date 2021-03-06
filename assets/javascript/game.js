//Global Variables
var numWins=0;      //Number of Wins for Player
var numLosses=0;    //Number of Losses for Player
var numGuess=9;     //Number of Guesses Left

//Letters to choose from
var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Letters user has tried
var guesses=[];     //Empty Array to be filled as user inputs tries

//Set answer to game
var answer=letters[Math.floor(Math.random()*letters.length)];


/* 
==============================================================
    Restart Function
    - Will Reset Number of tries to 9
    - Reset What User Has Tried
==============================================================
*/

function restart() {
    numGuess=9;
    guesses=[];
}

/* 
==============================================================
    Change Letter Function
    - Will Reset What the Answer is for another round
==============================================================
*/

function changeLetter() {
    answer=letters[Math.floor(Math.random()*letters.length)];
}

/* 
==============================================================
    Calculate Tries Function
    - Will Calculate How Many tries are left and Output it
==============================================================
*/

function calcTries() {
    document.querySelector("#numLeft").innerHTML="Guesses Left: "+numGuess;
}

/* 
==============================================================
    List Tries Function
    - Will Show What Letters User Has Tried
==============================================================
*/

function listTries() {
    document.querySelector("#usedLetters").innerHTML="Your Guesses So Far: "+guesses.join(' ');
}

calcTries();

//When Player presses key game will start
document.onkeyup=function(event) {
    numGuess--;     //Take 1 try away

    var keyPressed=String.fromCharCode(event.keyCode).toLowerCase();   //Store Try into variable

    guesses.push(keyPressed);   //Add Attempt Into Array of Tries
    calcTries();                //Calculate Tries Again
    listTries();                //Show Tried Letters

    //If Key Pressed is the Answer
    if(keyPressed===answer){
        numWins++;          //Increase Number of Wins
        document.querySelector("#wins").innerHTML="Wins: "+numWins; //Output Updated Wins
        //Reset Everything 
        restart();      //Number of Guesses Back to 9 and Tries Array Empty
        changeLetter(); //Change the Answer to Game
        calcTries();    //Output Updated Tries Count
        listTries();    //Update Tried Letters
    }

    //If Player Reaches 0 Tries Left
    if(numGuess<=0){
        numLosses++;          //Increase Number of Losses
        document.querySelector("#losses").innerHTML="Losses: "+numLosses;
        //Reset Everything 
        restart();      //Number of Guesses Back to 9 and Tries Array Empty
        changeLetter(); //Change the Answer to Game
        calcTries();    //Output Updated Tries Count
        listTries();    //Update Tried Letters
    }
}