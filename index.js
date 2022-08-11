// function radianToDegree(radians, radians, radians) {
//     var pi = Math.PI;
//     return radians * (180 / pi);
// }


// function isJavaScriptFile(String) {

//     let LastIndex = (isJavaScriptFile.endswith('.') + 1);
//     if (LastIndex == '.js') {
//         return true;
//     }
//     else {
//         return false;
//     }

// }
// let isJavaScriptFile = 'index,js'
// console.log(isJavaScriptFile);

// function isJavaScriptFile(String) {

//     if (extension == 'js') {
//         return true;
//     }
//     else if (extension == 'png') {
//         return false;
//     }


//     else {
//         return 'please provide your valid number';
//     }

// }


// console.log(isJavaScriptFile(ondex.js));


// function isJavaScriptFile(string) {
//     let required = file.substring(file.lastIndexOf('.') + 1);
//     if (required == 'js') {
//         return true;
//     }
//     else if (required == 'png') {
//         return false
//     }
//     else {
//         return 'Please provied valid input';
//     }
// }
// let file = 'main.png';
// console.log(isJavaScriptFile(file));

// function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {

//     let dieselLitre = 114;
//     let petrolLitre = 130;
//     let octaneLitre = 135;

//     let dieselPrice = dieselQuantity * dieselLitre;
//     let petrolPrice = petrolQuantity * petrolLitre;
//     let octanePrice = octaneQuantity * octaneLitre;
//     let totalPrice = dieselPrice + petrolPrice + octanePrice;

//     if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' ||
//         typeof octaneQuantity !== 'number') {
//         return 'Please inter your number'
//     }

//     return totalPrice
// }
// const totalPrice = oilPrice(1, 1, 1);
// console.log(totalPrice);


// function publicBusFare(publicBusRider) {
//     let publicBus = ((peopleCount % 50) % 11) * 250;

//     if (typeof publicBusRider !== 'number') {
//         return 'Please Enter your number'
//     }
//     return publicBus;


// }
// const peopleCount = 112;
// console.log(publicBusFare(peopleCount));

// for (let i = 0; i < friends.length; i++) {
//     if (friends[i].name == friends[i + 1].friend) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// const friends = [
//     { name: 'tushar', friend: 'jhankar' },
//     { name: 'jhankar', friend: 'tushar' }
// ];
// const bestFriend = isBestFriend(friends);
// console.log(bestFriend); 

// function isBestFriend() {
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].name == friends[i + 1].friend) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

// }
// const friends = [
//     { name: 'tushar', friend: 'jhankar' },
//     { name: 'jhankar', friend: 'tushar' }
// ];
// const bestFriend = isBestFriend(friends);
// console.log(bestFriend);



// function isBestFriend(name, friend) {
//     // if (typeof friend.name === 'object' && typeof friend === 'object') {
//     //     return 'Please Enter yuor valid input'
//     // }
//     let required;
//     if (required === { name: "abul", friend: "babul" },
//         { name: "babul", friend: "abul" }) {
//         return true
//     }
//     else if (required === { name: "abul", friend: "kbul" },
//         { name: "kabul", friend: "sabul" }) {
//         return false
//     }
//     else if (required === { name: "doe", friend: "alex" },
//         { name: "john", friend: "view" }) {
//         return false
//     }
//     else {
//         return "please provied your valid input "
//     }

//     return required


// }

// let required = isBestFriend([
//     { name: "doe", friend: "alex" },
//     { name: "john", friend: "dju" }
// ])

// console.log(required);

// function isBestFriend(name, friend) {

//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].name == friends[i + 1].friend) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

// }
// const friends = [
//     { name: 'tushar', friend: 'jhankar' },
//     { name: 'jhankar', friend: 'tushar' }
// ];
// const bestFriend = isBestFriend(friends);
// console.log(bestFriend); 

// function isBestFriend() {

//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].name == friends[i + 1].friend) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

// }
// const friends = [
//     { name: 'babul', friend: 'jhankar' },
//     { name: 'jhankar', friend: 'tushar' }
// ];
// const bestFriend = isBestFriend(friends);
// console.log(bestFriend); 

function isBestFriend() {
    if (friends1.name == friends2.friend &&
        friends2.name == friends1.friend) {
        return true
    }
    else {
        return false;
    }
}
const friends1 = { name: "doe", friend: "alex" };

const friends2 = { name: "alex", friend: "de" };

let myFriend = isBestFriend(friends1, friends2);
console.log(myFriend);