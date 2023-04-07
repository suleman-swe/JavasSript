//Creating variable using Const

const a = "Const Variable";     //cann't reassign new value to const variable 
alert(a);

//Creating variable using Let

if(true){
    let name = "Stetson";       //cann't be useful outside the brackets as "var" can use
    alert(name);
}

//Template String (Concatenation)

var fName = "John";
var lName = "Elbert";

var fullName = `${fName} ${lName}`;

console.log(fullName);

//IF-ELSE

a=21;
if(a<18)
{
    document.write("Welcome, You are allowed. Enjoy Your");
}else{
    document.write("You's are is not matching. Your are not allowed!");
}

x = 21;
if (x <= 18) {
    document.write("You are not 18");
} else {
    document.write("You are : " + x);
}

//TERNARY OPERATOR

var a = "3";
var b;

(a = 3) ? b = "Khan" : b = "Not Available";       //OR
b = (a == 3) ? "Khan" : "Not Available";
document.write(b);

//SWITCH CASE

var a = 6;   //Ex(1)
switch(a){
    case 1 :
        document.write("Number is "+a);
    break;
    case 2 :
        document.write("Number is "+a);
    break;
    case 3 :
        document.write("Number is "+a);
    break;
    
    default:
        document.write('"'+a+'"'+" number is not in the list");
}

var age = 21;   //Ex(2)
switch(true){
    case(age<=17):
        document.write("Younger! Sorry this scholarship is not for you.");
    break;
    case(age>=18 && age<=25):
        document.write("Yeah! You are eligible for this scholarship");
    break;

    default:
        document.write("Sorry elder boy. You are not eligible for scholarship. Go get a job!");
}

//PROMPT BOX

var a = prompt("First Number");
var b = prompt("Second Number");
console.log("Fisrt user input is: " + a);
console.log("Fisrt user input is: " + b);
var c = a+b;
console.log(c);
console.log(typeof a);
console.log(typeof b);

var b = Number(a);  //changing Data type String to Number
console.log(b);
console.log(typeof b);

//FUNCTIONS

function greeting(){
    console.log("Hello Coder!");
}

var name = prompt("Your Name?");
greeting();
console.log(name);

//FUNCTIONS with Parameters

function sum(a=12 , b=34){
    console.log(a+b);   
}

sum();

sum(10,34);    //if you define values here, these values will be used as input

sum(56,91);

sum(77,64);

//FUNCTIONS with Parameters

function fullname(fn="A" , ln="B"){           //Ex 1
    var a = fn + " " + ln;
    
    return(a);
}

var a = fullname("Suleman" , "Khan");
console.log(a);

function sum(eng,math,urdu){        //Percetage calculater example
    var s = eng + math + urdu;

    return s;
}
function percentage(tt){
    var per = tt/300 * 100;

    return per;
}
var total = sum(68,88,85);
var percentage = percentage(total);

console.log(percentage);

//GLOBAL & LOCAL VARIABLES

var a = 23;     //Global Variable (outside of function)

function hello(){
    console.log(a);

    var b = 87;     //Local Variable (Inside of function)
}

hello();

console.log(a);     //Glocal Variables will work inside & outside of function
console.log(b);     //Local Variables will NOT work outside of function, just will work for inside function code

//JavaScript Basic Events

Mouse Events
1. Click (onclick)
2. Double Click (ondbclick)
3. Right Click (oncontextmenu)
4. Mouse Hover (onmouseenter)
5. Mouse Out (onmouseout)
6. Mouse Down (onmousedown)
7. Mouse Up (onmouseup)

Keyboard Events
1. Key Press (onkeypress)     //Only works in body and form tag
2. Key Up (onkeyup)

Window Events     //All windows events will only work in body tag
1. Load (onload)
2. Unload (onunload)
3. Resize (onresize)
4. Scroll (onscroll)


//LOOP

There are 5 loops in JavaScript:
1. While Loop
2. Do/While Loop
3. For Loop
4. For/In Loop (uses with objects)
5. forEach Loop

//While Loop

var a = 1;
while(a <= 1348394783740){
    console.log("Basic Example of While Loop " + a);
    a = a+1;
}

//Do While Loop

var a = 1;
do{
    console.log("Basic Example of Do While Loop " + a);
    a = a+1;
}while(a <= 10)

//For Loop

for (var a = 1; a <= 5; a++) {      //Ex 1
    console.log("Basic Example of For Loop " + a);
}

for (var a = 1; a <= 10; a++){      //Table of 2 
    document.write("2 x " + a + "= " + 2 * a + "<br>");
}

//Break & Continue

for (var a = 1; a <= 5; a++){       //break
    if (a==4){
        console.log(a);
        break;
    }
    console.log(a);
}

for (var a = 1; a <= 5; a++){       //continue
    if (a==4){
        console.log(a);
        continue;
    }
    console.log(a);
}

//How to fine Even & Odd numbers

for (var a = 1; a <= 10; a++){      //Even
    if (a % 2 == 0) {
        console.log(a);
        continue;
    }
}

for (var a = 1; a <= 10; a++){      //Odd
    if (a % 2 ==! 0) {
        console.log(a);
        continue;
    }
}

//Nested Loop

for (var a = 1; a <= 100; a = a + 10) {
    console.log("First "+a);
    for (var b = a; b < a + 10; b++) {
        document.write(b+" ");
        console.log("Second "+b);
    }
    document.write("<br>");
}

//Array (basic way)

var a = [10, 34, "Office", true];

for(var a = 0, ){
}
