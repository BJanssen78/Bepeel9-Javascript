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

const checkAge = function(age){
    console.log('this is checkAge')
    if (age >= 18){
        return console.log('Hello there');
    }
    else{
        return console.log('Hey kiddo');
    }
}

const ageGreeting = function(age){
    console.log('this is ageGreeting');
    console.log('Value of age : ' + age);
    const agecheck = checkAge(age);
}

// ageGreeting(18);

//BTW oefening

const vatCalculation = function(basePrice, vatPercentage){
    const vatAmount = basePrice * vatPercentage;
    return (vatAmount);
}

const priceInclVAT = function(basePrice, vatPercentage){
    const inclVat2 = basePrice + vatCalculation(basePrice, vatPercentage);
    return console.log('Price including VAT ' + inclVat2);
}

// priceInclVAT(1000, 0.21)

const calcBasePrice = function(priceIncl, vatPercentage){
    const exVatPrice = priceIncl / vatPercentage;
    console.log('exvatprice = ' + exVatPrice);
    return(exVatPrice);
}

const basePrice = function(priceIncl, vatPercentage){
    const priceExVat = priceIncl - calcBasePrice(priceIncl, vatPercentage);
    console.log('priceExVat = ' + priceExVat);
    return console.log('Price exluding VAT ' + priceExVat);
}

// basePrice(1210, 1.21)

//extra opdracht van mezelf.

const checkBTW = function(basisPrijs, btwPercentage){
    const btwPrijs = basisPrijs / ((btwPercentage / 100) + 1);
    return btwPrijs;
}

const exPrice = function(basisPrijs, btwPercentage){
    const btwPrijsEx = basisPrijs * (btwPercentage / 100);
    return btwPrijsEx;
}

const priceCalculation = function(basisPrijs, btwPercentage, inExbtw){
    if(inExbtw == 'incl'){
        console.log('Your base price = ' + basisPrijs);
        console.log('The VAT of your price = ' + (basisPrijs - checkBTW(basisPrijs, btwPercentage)));
        console.log('The price exlusive VAT = ' + checkBTW(basisPrijs, btwPercentage));
        
    }
    else{
        console.log('Your base price = ' + basisPrijs);
        console.log('The VAT of your price = ' + exPrice(basisPrijs, btwPercentage));
        console.log('The price including VAT = ' + (basisPrijs + exPrice(basisPrijs, btwPercentage)));
    }
}

priceCalculation(1000, 21, 'ex')