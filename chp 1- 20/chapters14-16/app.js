                   // CHP 14-16 (ARRAYS)

// TASK 1 
// var arr = [];


// TASK 2
// var names = new Array();


// TASK 3
// var stringArray = ["cat" , "dog" , "lion"];


// TASK 4
// var numbersArray = [7 , 20 , 55];


// TASK 5
// var booleanArray = [true , false];


// TASK 6
// var mixedArray = [7 , 20 , "rose" , "tulip" , "lily" , true];


// TASK 7
// var heading = "Qualifications".bold();
// var arr1 = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PhD"];
//     document.write(heading + "<br/>" + "<br/>");
    
// for ( i=0; i < arr1.length; i++ ) {
//     document.write((i+1) + ") " + arr1[i] +"<br>");
// }


// TASK 8
// var studentNames = ["Michael".bold() , "John".bold() , "Tony".bold()];
// var scoreOfStudents = ["320", "230" , "480"];
// var totalMarks = 500;
//     document.write("Score of" + " " + studentNames[0] + " " + "is" + " " + scoreOfStudents[0] + "...Percentage is" + " " + (scoreOfStudents[0] / totalMarks) * 100 + "%" + "<br/>");
//     document.write("Score of" + " " + studentNames[1] + " " + "is" + " " + scoreOfStudents[1] + "...Percentage is" + " " + (scoreOfStudents[1] / totalMarks) * 100 + "%" + "<br/>");
//     document.write("Score of" + " " + studentNames[2] + " " + "is" + " " + scoreOfStudents[2] + "...Percentage is" + " " + (scoreOfStudents[2] / totalMarks) * 100 + "%");


// TASK 9

// a.
// var heading = "Colour Names".bold();
// var colourNames = ["Red" , "Pink" , "Blue" , "Green", "Black"];
// document.write(heading + "<br/>" + "<br/>");
// var inp1 = prompt("Enter the colour you want to add at the start");
// document.write( "Array Before Updation :  [ "+ colourNames + " ]");
// colourNames.unshift(inp1);
// document.write( "<br><br> Your Input is  : "+ inp1);
// document.write( "<br><br> Array After Updation : [ "+ colourNames + " ]");


// b.
// var heading = "Colour Names".bold();
// var colourNames = ["Red" , "Pink" , "Blue" , "Green", "Black"];
// document.write(heading + "<br/>" + "<br/>");
// var inp2 = prompt("Enter the colour you want to add at the end");
// document.write( "Array Before Updation :  [ "+ colourNames + " ]");
// colourNames.push(inp2);
// document.write( "<br><br> Your Input is  : "+ inp2);
// document.write( "<br><br> Array After Updation : [ "+ colourNames + " ]");


// c.
// var heading = "Colour Names".bold();
// var colourNames = ["Red" , "Pink" , "Blue" , "Green", "Black"];
// document.write(heading + "<br/>" + "<br/>");
// var inp1 = prompt("Enter the colour you want to add at the start");
// var inp2 = prompt("Enter another colour you want to add at the start");
// document.write( "Array Before Updation :  [ "+ colourNames + " ]");
// colourNames.unshift(inp1 + "," + inp2);
// document.write( "<br><br> Your Input is  : "+ inp1 + "," + inp2);
// document.write( "<br><br> Array After Updation : [ "+ colourNames + " ]");

// d.
// var heading = "Colour Names".bold();
// var colourNames = ["Red" , "Pink" , "Blue" , "Green", "Black"];
// document.write(heading + "<br/>" + "<br/>");
// document.write( "Array Before Updation :  [ "+ colourNames + " ]");
// colourNames.shift();
// document.write( "<br><br> Array After Updation : [ "+ colourNames + " ]");

// e.
// var heading = "Colour Names".bold();
// var colourNames = ["Red" , "Pink" , "Blue" , "Green", "Black"];
// document.write(heading + "<br/>" + "<br/>");
// document.write( "Array Before Updation :  [ "+ colourNames + " ]");
// colourNames.pop();
// document.write( "<br><br> Array After Updation : [ "+ colourNames + " ]");

// f. & g.
// var heading = "Colour Names".bold();
// var colourNames = ["Red" , "Pink" , "Blue" , "Green", "Black"];
// document.write(heading + "<br/>" + "<br/>");
// var addColour = prompt("Enter which colour do you wanted to add");
// var _addColour = prompt("Enter at which index you want to add colour");
// var _addColour123 = prompt("Enter how much colour you wanted to delete");
// document.write( "Array Before Updation :  [ "+ colourNames + " ]");
// colourNames.splice(_addColour , _addColour123 , addColour);
// document.write( "<br><br> Your Input is  : "+ _addColour + " ," + _addColour123 + " , " + addColour);
// document.write( "<br><br> Array After Updation : [ "+ colourNames + " ]");


// TASK 10
// var arr = ["320" , "230" , "480" , "120"];

// document.write("Array Before Updation : [ " + arr + " ] " + "<br>");
// var arr1 = arr.sort((a, b) => a - b);
// document.write("Array After Updation : [ " + arr1 + " ] ");


// TASK 11
// var cityNames = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Array Before Upadation : [ " + cityNames + "]" + "<br>");
// var selectedCities = cityNames.slice(2);
// document.write("Array After Upadation : [ " + selectedCities + "]");


// TASK 12
// var arr = ["This" , "is" , "my" , "cat"];
// document.write( " Array Before Updation :  [ "+ arr + " ]" );
// var join = arr.join(" ");
// document.write( "<br><br> Array After Updation :  [ " + join + " ]");


// TASK 13
// var heading = "Devices";
// var arr = [];
// document.write("Array Before Insertion : [ " + arr + "]  <br>");

// arr.push("keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");

// document.write("Array After Insertion : [ " + arr + "]  <br>" + "<br>");

// document.write("Array Before Deleting :  ");

// document.write("<br>  Out : " + arr.shift() );
// document.write("<br>  Out : " + arr.shift() );
// document.write("<br>  Out : " + arr.shift() );
// document.write("<br>  Out : " + arr.shift() );



// TASK 14
// var heading = "Devices";
// var arr = [];
// document.write("Array Before Insertion : [ " + arr + "]  <br>");

// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");

// document.write("Array After Insertion : [ " + arr + "]  <br>" + "<br>");

// document.write("Array Before Deleting :  ");

// document.write("<br>  Out : " + arr.pop() );
// document.write("<br>  Out : " + arr.pop() );
// document.write("<br>  Out : " + arr.pop() );
// document.write("<br>  Out : " + arr.pop() );




    

