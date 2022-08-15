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

function multi1(number1, number2){
    const multiply1 = number1 * number1;
    const multiply2 = number2 * number2;
    const add1 = multiply1 + multiply2;
    const multiply3 = add1 * add1;
    return console.log('Result of function declaration : ' + multiply3);
}
multi1(1, 1);

console.log('');//adding empty line to the terminal

const multi2 = function(number3, number4){
    const multiply4 = number3 * number3;
    const multiply5 = number4 * number4;
    const add2 = multiply4 + multiply5;
    const multiply6 = add2 * add2;
    return console.log('Result of function expression : ' + multiply6);
}
multi2(1, 1);

console.log('');//adding empty line to the terminal

const multi3 = (number7, number8) => {
    const multiply7 = number7 * number7;
    const multiply8 = number8 * number8;
    const add3 = multiply7 + multiply8;
    const multiply9 = add3 * add3;
    return console.log('Result of function arrow : ' + multiply9);
}
multi3(1, 1);
