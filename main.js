
let points=0; /*cheap fix, i know*/

function computerPlay(){
    /*Randomly returns rock, paper or scicors*/
    let play = Math.floor(Math.random() * 3) + 1;
    switch (play){
        case (1):
            play = "rock";
            break;
        case (2):
            play = "paper";
            break;
        case (3):
            play = "scissors";
            break;
        default:
            console.log("Problem in computerPLay()");
            break;
    }
    console.log("Computer picked " + play);
    return play;
}

function userPlay(){
    let varUserPlay;
    console.log("Type/pick: Rock. Paper. Scissors");
    varUserPlay = prompt("Type/pick: Rock. Paper. Scissors");
    varUserPlay = varUserPlay.toLowerCase();
    
    if (varUserPlay === "rock"){
        console.log("You picked rock...");
        
    }
    else if (varUserPlay === "paper"){
        console.log("You picked paper...");
        
    }
    else if (varUserPlay === "scissors"){
        console.log("You picked scissors...");
        
    }
    else{
        console.log(`You typed an invalid option: ${varUserPlay}`)
        userPlay();
    }
    
    return varUserPlay;

}

function processPlay(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        return `Oh, looks like a draw. You both picked ${playerSelection}`;
    }
    else if((playerSelection === "rock")){
        switch(computerSelection){
            case "paper":
                return `Oh, looks like you lost. Computer picked ${computerSelection}`;
            case "scissors":
                points++;
                return `Oh, you won... Computer picked ${computerSelection}. Congrats, I guess...`;
            }
    }
    else if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                points++;
                return `Oh, you won... Computer picked ${computerSelection}. Congrats, I guess...`;
            case "scissors":
                return `Oh, looks like you lost. Computer picked ${computerSelection}`;
            }
    }
    else if(playerSelection === "scissors"){
        switch(computerSelection){
            case "rock":
                return `Oh, looks like you lost. Computer picked ${computerSelection}`;
            case "paper":
                points++;
                return `Oh, you won... Computer picked ${computerSelection}. Congrats, I guess...`;
            }
    }
    else{
        console.log("Error in function processPlay()");
    }
    console.log(`Player selection = ${playerSelection}\nComputer selection = ${computerSelection}`)

}

function mainGame(){

    for (let i = 0; i < 5; i++) {
        console.log(processPlay(userPlay(), computerPlay())); 
    }
    console.log("GameOver!");
    console.log(`You achieved ${points} points. Meh.`);
}

mainGame();