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

const checkNumber = function(number1){
    if (number1 > 100){
        const bigNumber = '✅ Number is greater than 100';
        return bigNumber;
    }
    else if (number1 < 100){
        const noBigNumber = '❌ Number is not greater than 100';
        return noBigNumber;
    }
}

checkNumber(101);