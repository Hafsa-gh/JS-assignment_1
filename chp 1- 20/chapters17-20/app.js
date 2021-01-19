// CHP 17-20 (ARRAYS AND LOOP)

// TASK 1 
// var arr = [
//     [],
//     []    
// ]


// TASK 2
// var students = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ]
// for (var index = 0; index < students.length; index++) {

//     for (var index1 = 0; index1 < (students[index]).length; index1++) {
//         document.write((students[index][index1]) +" ");
//     }
//     document.write("<br>");

// }


// TASK 3 
// for (var i = 0; i < 10; i++ ){
//     document.write((i+1) + "<br>");
// }


// TASK 4 
// var inp1 = +prompt("Enter a number to show its multiplication table");
// var inp2 = +prompt("Enter length of table");
// for (var i = 1; i<=inp2; i++){
//     document.write(inp1 + " " +  "x" + " " +  i + " " +  "=" + " " +  inp1*i + "<br>");
// }


// TASK 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var index = 0; index < fruits.length; index++) {
//     document.write( fruits[index] + "<br>");
// }
// document.write("<br><br>");
// for (var index = 0; index < fruits.length; index++) {
//     document.write( " Element at index "+ index + " is : " + fruits[index] + "<br>");
// }



// TASK 6

// document.write("<b> Counting </b> <br> ");
// for (var index = 0; index < 15; index++) {
//     document.write((index+1)+" ");
// }

// document.write("<br><br> <b> Reverse Counting </b> <br>");
// for (var index = 10; index > 0; index--) {
//     document.write(index+" ");
// }
// document.write("<br><br> <b> Even Numbers </b> <br> ");
// for (var index = 0; index <= 20; index++) {
//     if((index%2)===0){
//     document.write(index+" ");
//     }
// }
// document.write("<br> <br><b> Odd Numbers </b> <br> ");
// for (var index = 0; index <= 19; index++) {
//     if((index%2)!==0){
//     document.write(index+" ");
//     }
// }
// document.write("<br><br> <b> Even Series </b> <br> ");
// for (var index = 2; index <= 20; index++) {
//     if((index%2)===0){
//     document.write(index+"k ");
//     }
// }




// TASK 7
// var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// var input = prompt("Enter name of item to Search in List");
// var firstChar = input.slice(0,1);
//  firstChar=firstChar.toUpperCase();
// var others = input.slice(1);
// others=others.toLowerCase();

// var newInput = firstChar+others;

// for (var index = 0; index < A.length; index++) {
//     if(A[index] === newInput){
//         document.write( newInput + " is <b>available</b> at index " + index + " in our bakery");
//     }
//     else{
//         if(index === (A.length-1))
//          document.write("We are sorry " + newInput + " is<b> not available</b> in our bakery");
//     }
// }





// TASK 8
// var A = [24, 53, 78, 91, 12];
// document.write("Array Items : ".bold() + A + "<br>");

// A.sort((a, b) => b - a);
// document.write("The largest number is : ".bold() + A[0]);





// TASK 9
// var A = [24, 53, 78, 91, 12];
// document.write("Array Items : ".bold() + A + "<br>");

// A.sort((a, b) => a - b);
// document.write("The smallest number is : ".bold() + A[0]);




// TASK 10
// for (var i = 1; i < 100; i++) {
//     if(i*5 <= 100){
//         document.write((i * 5) + " , ")
//     }
// } 
