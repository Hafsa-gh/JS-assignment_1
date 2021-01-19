                   // CHP 9-11 (USER INPUT & CONDITIONAL STATEMENT)

// TASK 1
// var cityName = prompt("Enter your City Here");
// if (cityName === "karachi"){
//     alert("Welcome to the city of Lights...!")
// }
// else{
//     alert(cityName  + " " + "is not the city of lights...!")
// }


// TASK 2
// var genderName = prompt("Enter Your Gender");
// if (genderName == "male"){
//     alert("Good Morning Sir")
// }
// else if (genderName == "female"){
//     alert("Good Morning Ma'am")
// }


// TASK 3
// var trafficSignal = prompt("Colour of traffic signal");
// if (trafficSignal == "red"){
//     alert("Must Stop...!!");
// }
// else if (trafficSignal == "yellow"){
//     alert("Ready to move...!!");
// }
// else if (trafficSignal == "green"){
//     alert("Move now...!!");
// }
// else {
//     alert("You entered wrong colour...!");
// }


// TASK 4
// var inputOfFuel = prompt("Remaining fuel in car (In litres)");
// if (inputOfFuel > 0.25){
//            alert("You're ready to go...")
// }
// else if (inputOfFuel <= 0.25){
//     alert("Please refill the fuel in your car")
// }


// TASK 5
//    a.
// var a = 4;
// if (++a === 5){ 
//     alert("given condition for variable a is true");
// }

    //  b.
// var b = 82; 
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

    //  c.
// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 

// if (c === 13){ 
//     alert("condition 2 is true"); 
// } 

// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 

// if(c === 14){ 
//     alert("condition 4 is true");
// }

    // d.
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals");
// }

    // e.
// if (true){ 
//     alert("True"); 
// } if (false){ 
//     alert("False");
// }

    //  f.
// if("car" < "cat"){ 
//     alert("car is smaller than cat");
// }

// OUTPUTS
// a.
// alert displayed.

// b.
// alert not displayed.

// c.
// only alert of condition of 2 and 4 displayed.

// d.
// alert displayed

// e.
// alert (true) displayed

// f.
// alert displayed


// TASK 6
// var heading = "Marksheet".bold();
// var totalMarks = +prompt("Enter your total marks");
// var obtMarks = prompt("Enter your obtained marks");
// var percentage = (obtMarks / totalMarks) * 100;
// document.write(heading + "<br/>" + "<br/>" + "Total Marks : " + " " +  totalMarks +  "<br/>" + "Obtained Marks : " + " " +  obtMarks + "<br/>" + "Percentage : " + " " + percentage + "%");

// if (percentage >= 80){
//     document.write("<br/>" + "Grade : " + "A-one" + "<br/>" +  "Remarks : " + "Excellent")
// }

// else if (percentage >= 70){
//     document.write("<br/>" + "Grade : " + "A" + "<br/>" +  "Remarks : " + "Good")
// }

// else if (percentage >= 60){
//     document.write("<br/>" + "Grade : " + "B" + "<br/>" +  "Remarks : " + "Satisfactory")
// }

// else if (percentage < 60){
//     document.write("<br/>" + "Grade : " + "Fail" + "<br/>" +  "Remarks : " + "You need to improve")
// }


// TASK 7
// var number = 7;
// var guessNumber = +prompt("Guess the secret number ranging from (1 - 10)");
// if (number === guessNumber){
//      alert("BINGO...!...Correct answer")
// }

// else if (guessNumber === 8){
//     alert("Close enough to the correct answer.")
// }

// else {
//     alert("Oops ...! Try again")
// }


// TASK 8
// var num = +prompt("Enter your number");
// if (num % 3 === 0){
//     alert("Number is divisible by 3")
// }

// else {
//     alert("Number is not divisible by 3")
// }


// TASK 9
// var number = +prompt("Enter number");
// if (number % 2 === 0) {
//     alert(number + " " + "is an even nuumber..")
// }
// else  {
//     alert(number + " " + "is an odd nuumber..")
// }


// TASK 10
// var tempInput = +prompt("Enter Temperature");
// if (tempInput > 40) {
//         alert("It is too hot outside.")
// }

// else if (tempInput > 30) {
//     alert("The Weather today is Normal.")
// }

// else if (tempInput > 20) {
//     alert("Today’s Weather is cool.")
// }

// else if (tempInput > 10) {
//     alert("OMG! Today’s weather is so Cool.")
// }

// else if ( tempInput < 10){
//      alert("Extreme Coldness")
//   }


// TASK 11
// var firstNum = +prompt("Enter Your First Value");
// var secondNum = +prompt("Enter Your Second Value");
// var sign = +prompt("Enter Your Operator");

// if (sign === "+") {
//         alert(firstNum + secondNum);
// }

// else if (sign === "-" ) {
//     alert(firstNum - secondNum);
// }

// else if (sign === "*" ) {
//     alert(firstNum * secondNum);
// }

// else if (sign === "/" ) {
//     alert(firstNum / secondNum);
// }

// else if (sign === "%" ) {
//     alert(firstNum % secondNum + "%");
// }

