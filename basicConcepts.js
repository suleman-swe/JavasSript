a=21;
if(a<18)
{
    document.write("Welcome, You are allowed. Enjoy Your");
}else{
    document.write("You's are is not matching. Your are not allowed!");
}

//IF-ELSE

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
