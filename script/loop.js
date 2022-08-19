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

for (let i = 1; i <= 20; i++){
    if ((i % 2) == 1){
        console.log(i + ' is odd');
    }
    else{
        console.log(i + ' is even');
    }
}

for (let i = 1, a = 9; i <= 10; i++){
    console.log(i + ' x 9 = ' + (i * a));
}

for (let  i  = 1; i <= 10; i++){
    for (let z = 1; z <= 10; z++){
        console.log(z + ' x '+ i + ' = ' + (i * z));
    }
    
}

const assignGrade = function (score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

for (let score = 60; score <= 100; score++){
    console.log('For scoring ' + score + ' points, you get a(n) ' + assignGrade(score));
}