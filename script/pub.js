const age = 25;
const day = "thursday";
const isFemale = true;
const driverstatus = "Designated";
const firstName = "Ben";
const totalAmount = 100;

if (age >= 18 && age <= 25){
    console.log("Access granted and you get 50% discount");
    if (day == "thursday" && isFemale){
        console.log("It's lady's night, you have free entrance");
        if (firstName == "Bram" || firstName == "Sarah"){
            console.log("You get a free beer");
        }
    }
} else if (age >= 18){
    console.log("Access granted")
} else{
    console.log("You are to young to enter");
}

if (totalAmount >= 100){
    console.log("You get a free bottle of Champagne");
}
else if (totalAmount >= 50){
    console.log("You get a free portion of nachos");
}
else if (totalAmount >= 25){
    console.log("You get a free portion of veggie bitterballen");
}
else{
    console.log("Unfortunatly no discount for you, but we are happy to have you")
}

if (driverstatus == "Designated"){
    console.log("You are allowed to drive");
} else{
    console.log("You are not allowed to drive")
}