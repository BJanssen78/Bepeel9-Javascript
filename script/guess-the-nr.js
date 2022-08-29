/*
Dit stukje heb ik gejat van Winc Academy Leraar Niels.
Een leuk hebbe dingetje die er gaaf en professioneel uitziet.
Dank je wel Niels.
*/
(() => {
    console.clear();
    const currentdate = new Date();
    console.log(
        `>>> \x1b[32m💾 Bepeel Development \x1b[0m <<< ${
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds()
        } ${ ">>> \x1b[32m Bepeel Development \x1b[0m <<<"}`
    );
})();//Einde hebbe dingetje van Niels.

console.log('Welcome to "Guess the number game"');
let userlives = 5;
let maxNumber = 25; //Standaard waarde is 25
let userAttempt = 5;

const greetUser = function(name){
    // let name = prompt('Welcome, what is your name? ... ');
    const userName = name.trim();
    if(userName != null){
        console.log('A plessure to meet you ' + userName);
        userAnswer = prompt('Would you like to guess the number i have in mind?' + 
                            'It\'s very simpel, just type a number between 0 and '+ maxNumber +
                            'If your answer is correct, you get an additional live, if your answer is wrong, you lose a live' +
                            'You have 5 attempts to guess the number' +
                            'If you don\'t want to play or stop the game, just type stop');
        return userAnswer;
    }
    else{
        
        if(name === null){
            let name = prompt('This is not a name, may i know your name? ... ');
            // return name;
        }
        else{
            return alert('A plessure to meet you ' + name);
        }
        return name;
    }
}

const createNr = function(){
    let randomnr = Math.floor(Math.random() * maxNumber);
    console.log(randomnr);
    return randomnr;
}

const attempt = function(userAnswer){
    if(userAnswer === 'stop' || 'Stop'){
        return alert('Sorry to see you leave, see you next time ' + userName + userAnswer);
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

createNr();
greetUser(String());
// attempt(prompt('Enter a number'));

for (let userName = String(''); userName == null || undefined || ''; attempt(prompt('Enter a number'))){
    greetUser(String(prompt('What is your name?')));
    return userName;
}