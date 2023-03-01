/*
// premitives data types
let a = 4; //number
let b = null // null
let g = true // boolean
let c= BigInt("657") // big integer
let d = "Hello, world!" // string
let e = Symbol("I am sys");
let f = undefined // undefined
//console.log(a, b, c, d);   
// check type or data types
console.log(typeof a);

//objects in js non premitive data types

const items = {
    "a": true, 
    "b": false,
    "c": 10,
    "d": "Hello, js",
    "e": undefined
};
//console.log(items);
console.log(items["c"]);

//expressions arthematics operators
let a1=2;
let a2=2;
console.log("a+b=",a1+a2)
console.log("a-b=",a1-a2)
console.log("a/b=",a1/a2)
console.log("a*b=",a1*a2)
console.log("a**b=",a1**a2)//exponential
console.log("a%b=",a1%a2)//module
console.log("a++",a1++)// incremental, it will increment but will show the original value
console.log("a",a1)// it shows the incremental value
console.log("++a",++a1)//same as incremental it will show the incremental value
console.log("a--",a1--)//decremental
console.log("a",a1)
console.log("--a",--a1)
 
//assignment operaters
a1=5 //assign
a1 +=5 // same as a1=a1+5
console.log("+=",a1) 
console.log("-=",a1 -=1)
console.log("*=",a1*=2)
console.log("/=",a1/=2)
console.log("%=",a1%=2)
console.log("**",a1**2) 

//comparison operators
let c1=5
let c2=5
console.log("c1==c2",c1==c2)
console.log("c1!=c2",c1!=c2)
console.log("c1<c2",c1<c2)
console.log("c1>c2",c1>c2)
console.log("c1<=c2",c1<=c2)
console.log("c1>=c2",c1>=c2)

let com1=6
let com2="6"
console.log("com1==com2",com1==com2)
console.log("com1!=com2",com1!=com2)
console.log("com1===com2",com1===com2)//it will chch the data type also
console.log("com1!==com2",com1!==com2)//it will chch the data type also

//logical operators
let x=5
let y=9
console.log(x<y && x==5)//and operator
console.log(x<y || x==5)// or operator
console.log(!false)// not operator

//video-7 conditional expression
const prompt =require("prompt-sync")();// importing
let age = prompt("Enter your age:")
age = Number.parseInt(age)//converting the string to a number
if (age>18){
    console.log("approved")
}
else if (age == 18){
    console.log("Apply from portal")
}
else if (age<18){
    console.log("Check Age")
}
else{
    console.log("Enter age again")
}

// switch statement
let age_ = "20";
switch (age_){
    case ("20"):
        console.log("Approved");
        break;
    case ("18"):
        console.log("Apply from portal");
        break;
    case ("15"):
        console.log("Check age");
        break;
    default:
        console.log("Reenter age");
}
//turnary operator
console.log("You can", age<18?"Not apply":"Apply")
//video-8
let v = prompt("Enter the number");
if (v%2==0)
{
    console.log("Number is divisble by 2")
}
else if(v%3==0)
{
    console.log("Number is divisble by 3")
}
else 
{
    console.log("Number is not divisible by 2 or 3")
}
*/

//video 9(for loop)
//sum of n natural numbers
const prompt =require("prompt-sync")();// importing
let sum =0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i<n; i++) 
{
    sum +=(i+1)
}
console.log("Sum of "+n+" natural number is "+ sum);
//video 10
//while loop
let i = 0;
while(i<n){
    i++;
    console.log("While loop output",i)
}

//do while loop
do{
    i++;
    console.log("Do while loop output",i)
    
}while(i<n)




