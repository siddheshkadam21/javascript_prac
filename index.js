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
/*
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


//function
//tradtional way to writ function
const prompt =require("prompt-sync")();// importing
let first_number = prompt("Enter number")
//first_number = Number.parseInt(first_number)
let second_number  = 10
//second_number = Number.parseInt(second_number)
function average_num(x,y){
    x= Number.parseInt(x)
    y= Number.parseInt(y)
    return ((x + y) / 2);
}
//advance way of writting function
const summation_of_numbers = (x,y)=>{
    x= Number.parseInt(x)
    y= Number.parseInt(y)
    console.log("Check the sum of number")
    return(x+y);
}

console.log("average of number",average_num(first_number,second_number));
console.log(summation_of_numbers(first_number,second_number));

//video12
let marks = {
    a:10,
    b:20,
    c:30,
    d:40
};
for (const pro in marks){
    console.log(`${pro}:${marks[pro]}`);
}
//console.log(marks)
const mean = (a,b,c) =>{
    return (a+b+c)/3
};
console.log(mean(2,2,2));
*/
//string- inserting in sentence using back strick
//srting interpulation
//string is immutable
let fn = "First Name"
let ln = "Last Name"
console.log(`Enter your ${fn} and ${ln}`)
let fri = 'water\'melon'
let doublecode = "water'Melon'"
console.log(fri)
console.log(doublecode)
console.log("Number of characters:",fn.length)//number of characters
console.log("Upper case:",fn.toUpperCase())//upper case
console.log("Lower case:",fn.toLowerCase())//lower case
console.log("Indexing with two argument:",fn.slice(2,5))//indexing
console.log("Indexing with one argument:",fn.slice(2))
console.log("Replace:",fn.replace("First","Your"))//replace character
console.log("After entering ",fn.concat(" also enter your ",ln.toUpperCase()," and then DOB"))//concat
let rt = "    SK      "
console.log("Removed space which is present at start and end",rt.trim()) // remove extra space from start and end middle will remain same

//video 15
console.log(`Enter "${ln}"${fn.includes(ln)? ' middle name ': 'DOB'} Submit`); //includes return true or false

//extracting specific word or number from sentence using indexcing for it.
let srt = "The given amount is 25000";
let amount = Number.parseInt(srt.slice("The given amount is".length));
console.log(amount);
console.log(typeof amount)

//as string is immutable it won't change
let friend = "Elon"
friend[2] = "M"
console.log(friend)

//video16 - Array