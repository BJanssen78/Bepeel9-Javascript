//start variable
let userLives = 5;
// let userAttempt = 5;
let userMaxNr = 25; // Optioneel door gebruiker in te voeren
let userName = String('')

//seperate functies
const createNr = function(){
    let randomnr = Math.floor(Math.random() * userMaxNr);
    console.log(randomnr);
    return randomnr;
}

const greeting = function(userName){
    if(userName == ''){
        let userName = prompt(String('Welcome, may i know your name'));
        return userName;
    }
    else{
        alert('Welcome ' + userName);
    }
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
                return alert('Good bye, see you next time')
            }
    }
    else{
        //continue the game
    }
}

//execution block
createNr();
greeting('');

const numberGame = function(){
    for (let userAttempt = 5; userAttempt == 0;){
    createNr();
    greeting('');
    let userAnswer = prompt('Would you like to guess the number i have in mind?' + 
                            'It\'s very simpel, just type a number between 0 and '+ maxNumber +
                            'If your answer is correct, you get an additional live, if your answer is wrong, you lose a live' +
                            'You have 5 attempts to guess the number' +
                            'If you don\'t want to play or stop the game, just type stop');
    if(userAnswer == 'stop' || 'Stop'){
        return alert('Sorry to see you leave, see you next time'), userAttempt - 5;
    }
    else if(userAnswer === randomnr){
        userlives++;
        alert('Yeah, well done, here\'s your reward.' +
                'You\'re new live count is ') + userlives; 
        createNr();
        return;
    }
    else{
        let userHintMin = randomnr - 5;
        let userHintMax = randomnr + 5;
        userAttempt--;
        userlives--;
        prompt('Sorry, that is not correct' + 
            'The number is between ' + userHintMin + ' and ' + userHintMax +
            'You have ' + userAttempt + ' attempts and ' + userlives + ' lives left.');
        return;
    }
}
}