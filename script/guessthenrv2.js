//start variable
let userMaxNr = 25; // Optioneel door gebruiker in te voeren
let userName = String('');

//seperate functies
const createNr = function(){
    let randomnr = Math.floor(Math.random() * userMaxNr);
    console.log(randomnr);
    return randomnr;
}

const greeting = function(userName){
    while (userName === ''){
        let userName = prompt('Welcome, may i know your name?');
        return userName;
        alert('Your name is ' + userName)
    }
}

const game = function(){
    // greeting('');
    createNr();

    for (let userAttempt = 0; userAttempt == 5; userAttempt++){
        let userAnswer = prompt('Would you like to guess the number i have in mind?' + 
                                'It\'s very simpel, just type a number between 0 and '+ maxNumber +
                                'If your answer is correct, you get an additional live, if your answer is wrong, you lose a live' +
                                'You have 5 attempts to guess the number' +
                                'If you don\'t want to play or stop the game, just type stop');
        if(userAnswer == 'stop' || 'Stop'){
            return alert('Sorry to see you leave, see you next time'), userAttempt + 5;
        }
        else if(userAnswer === randomnr){
            userAttempt--;
            alert('Yeah, well done! ! !'); 
            createNr();
            return;
        }
        else{
            let userHintMin = randomnr - 5;
            let userHintMax = randomnr + 5;
            prompt('Sorry, that is not correct' + 
                'The number is between ' + userHintMin + ' and ' + userHintMax +
                'Try again, or type stop');
            return;
        }
    }
}

game();