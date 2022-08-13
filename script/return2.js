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

const clubEntry = function(age, maxNumberAllowed, currentNumberInside){
    if (currentNumberInside >= maxNumberAllowed){
        return console.log('it\'s too busy now, come back later');
    }
    else if(currentNumberInside < maxNumberAllowed && age >= 18){
        return console.log('Come in');
    }
    else{
        return console.log('this is a club for adults');
    }
};

clubEntry(18, 100, 100);

console.log(''); //adding empty line on terminal

const averageNumber = function(...number){
    console.log('The rounded up average of your numbers are :');
    const countList = (number.length);
    const addList = number.reduce((item, item2) =>{
        return item + item2;
    }, 0);
    const averageNumber2 = (addList / countList);
    const roundAverage = Math.round(averageNumber2);
    return console.log(roundAverage);
};

averageNumber(1, 2, 3, 4, 5, 6);