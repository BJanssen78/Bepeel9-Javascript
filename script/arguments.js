/*
Dit stukje heb ik gejat van Winc Academy Leraar Niels.
Een leuk hebbe dingetje die er gaaf en professioneel uitziet.
Dank je wel Niels.
*/
(() => {
    console.clear();
    const currentdate = new Date();
    console.log(
        `>>> \x1b[32m Bepeel Development \x1b[0m <<< ${
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds()
        } ${ ">>> \x1b[32m Bepeel Development \x1b[0m <<<"}`
    );
})();//Einde hebbe dingetje van Niels.

const paintWall = function(whichWall, color){
    console.log ('The ' + whichWall + ' wall has been painted ' + color);
};


paintWall('north', 'green');