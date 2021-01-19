                   // CHP 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)

// TASK 1
// var inputchar = prompt("Enter Any Alphabet");
// var asccii = inputchar.charCodeAt();
// if(asccii >= 65 && asccii <= 90 ){
//     alert("You Have Entered Capital Letter."); 
// }
// else if(asccii  >= 97 && asccii <= 122 ){
//     alert("You Have Entered Small Letter."); 
// }


// TASK 2
// var integer1 = +prompt("Enter first number");
// var integer2 = +prompt("Enter second number");

// if (integer1 > integer2){
//     alert(integer1 + " " + "is greater than" + " " + integer2)
// }

// if (integer1 < integer2){
//     alert(integer2 + " " + "is greater than" + " " + integer1)
// }


// TASK 3
// var inputNumber = +prompt("Enter your number");

// if (inputNumber > 0) {
//      alert(inputNumber + " " + "is positive number...")
// }

// else if (inputNumber < 0) {
//     alert(inputNumber + " " + "is negative number...")
// }


// TASK 4
// var inputAlphabet = prompt("Enter an alphabet");

// if(inputAlphabet === "a" || inputAlphabet === "e" || inputAlphabet ==="i" || inputAlphabet === "o" || inputAlphabet ==="u"){
//     alert("True! It's a Vowel");
// }
// else{
//     alert("False ! It's not a Vowel");
//     alert("It's a consonant")
// }


// TASK 5
// var correctPassword = prompt("Enter Your password");
// var reenterPassword = prompt("Re-enter Your password");
// if (correctPassword === ""){
//   alert("Please enter your password")
// }
// else if (correctPassword === reenterPassword){
//   alert("Correct! The password you entered matches the original password")
// }
// else{
//   alert("Incorrect password")
// }


// TASK 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = "Good day";
//     alert(greeting);
// } 
// else {
//     greeting = "Good evening"; 
//     alert(greeting);
// }


// TASK 7
// var time = +prompt("Enter time in 24 hours clock");
// if (time >= 00 && time < 12 ){
//   alert("Good Morning!" + " " + "It's" + " " + time +  " " + "A.M")
// }
// else if (time >= 12 && time < 17){
//   alert("Good Afternoon!"+ " " + "It's" + " " + time + " " + "P.M")
// }
// else if (time >= 17 && time < 20){
//   alert("Good Evening!"+ " " + "It's" + " " + time + " " + "P.M")
// }
// else if (time >= 20 && time <= 23){
//   alert("Good Night!"+ " " + "It's" + " " + time + " " + "P.M")
// }