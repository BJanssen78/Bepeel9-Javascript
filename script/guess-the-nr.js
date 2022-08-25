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
let lives = 5;
let maxNumber = 25; //Standaard waarde is 25

const greetUser = function(name){
    if(name != null){
        
        console.log('A plessure to meet you ' + name);
    }
    else{
        let name = prompt('Welcome, what is your name? ... ');
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

const userLives = function(userAnswer){
    if(userAnswer){
        alert('Seems you have guest the correct number, here is an additional live to spare');
        lives++
    }
    else{
        lives--;
    }
}

const createNr = function(){
    let randomnr = Math.floor(Math.random() * maxNumber);
    console.log(randomnr);
    return randomnr;
}

createNr();
// greetUser();