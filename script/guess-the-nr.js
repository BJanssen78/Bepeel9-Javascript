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

let name = prompt('Welcome, what is your name? ... ');

const greetUser = function(name){
    if(name != null){
        console.log('A plessure to meet you ' + name);
    }
    else{
        console.log('Welcome, what is your name? ... ');
    }
}

const createNr = function(){
    let randomnr = Math.floor(Math.random() * 25);
    console.log(randomnr);
    return randomnr;
}

createNr();
greetUser();