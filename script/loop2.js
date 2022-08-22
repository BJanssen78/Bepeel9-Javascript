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



const colorArray = ['yellow', 'blue', 'red', 'orange', 'green'];

let i = 0;
let txt = '';

while (colorArray[i]){
    txt += colorArray[i];
    i++;
    console.log('while loop ' + colorArray[i]);
}

for (let a = 0; a < colorArray.length; a++){
    console.log('For loop ' + colorArray[a]);
}

colorArray.forEach(i => {
    console.log('Foreach loop ' + i);
});