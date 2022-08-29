//start variable
let userLives = 5;
let userAttempt = 5;
let userMaxNr = 25;

//seperate functies
const createNr = function(){
    let randomnr = Math.floor(Math.random() * userMaxNr);
    console.log(randomnr);
    return randomnr;
}

const userAttemptCheck = function (){
    if(userAttempt || userLives == 0){
        let userAttemptCheckMsg = confirm('You have no more attempts or lives left, you have losed the game' + 
            'Would you try again?');
            if(userAttemptCheckMsg){
                //execute from start without name
            }
            else{
                //exit the game
            }
    }
    else{
        //continue the game
    }
}
//execution block
createNr();