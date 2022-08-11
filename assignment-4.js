// =========================//=======================
//Problem:1  radianToDegree 
// =========================//=======================


function radianToDegree(radian) {
    let degree = (180 * radian) / Math.PI;
    if (typeof radian !== 'number') {
        return 'Please Enter your number'
    }
    return (parseFloat(degree.toFixed(2)));

}

console.log(radianToDegree(10));


// =========================//=======================
//Problem:2  isJavaScriptFile
// =========================//=======================


function isJavaScriptFile(string) {
    let required = file.substring(file.lastIndexOf('.') + 1);

    if (required == 'js') {
        return true;
    }
    else if (required == 'png') {
        return false
    }
    else {
        return 'Please provied your valid input';
    }
}
let file = 'index.js';
console.log(isJavaScriptFile(file));


// =========================//=======================
//Problem 3: oilPrice
// =========================//=======================



function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {

    let dieselLitre = 114;
    let petrolLitre = 130;
    let octaneLitre = 135;

    let dieselPrice = dieselQuantity * dieselLitre;
    let petrolPrice = petrolQuantity * petrolLitre;
    let octanePrice = octaneQuantity * octaneLitre;
    let totalPrice = dieselPrice + petrolPrice + octanePrice;

    if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' ||
        typeof octaneQuantity !== 'number') {
        return 'Please inter your number'
    }

    return totalPrice
}
let totalPrice = oilPrice(1, 1, 1);
console.log(totalPrice);


// =========================//=======================
//Problem 4: publicBusFare
// =========================//=======================

function publicBusFare(publicBusRider) {
    let publicBus = ((peopleCount % 50) % 11) * 250;

    if (typeof publicBusRider !== 'number') {
        return 'Please provied your valid number'
    }
    return publicBus;


}
const peopleCount = 55;
console.log(publicBusFare(peopleCount));

// =========================//=======================
//Problem 5: isBestFriend
// =========================//=======================


function isBestFriend() {
    if (friends1.name == friends2.friend &&
        friends2.name == friends1.friend) {
        return true
    }
    else {
        return false;
    }
}
const friends1 = { name: "abul", friend: "babul" };

const friends2 = { name: "babul", friend: "bul" };

let myFriend = isBestFriend(friends1, friends2);
console.log(myFriend);

























