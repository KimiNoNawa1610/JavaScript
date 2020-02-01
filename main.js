//Variables are case-sensitive
//Should be meanignful and descriptive
//Cannot start with a number
// Cannot start with a space or hyphen
//Cannot be reserved word

let propperCamelCase =true;
let a,b,c;
a=1;
b=2;
c=3;

//----------------------------------------------------------------

// Constants
const pi=3.14;
//Read only, immutable
console.log(pi);

//----------------------------------------------------------------

//Data type
let name="John";// String literal
let age= 30;// Number literal
let lovescat=true;// Bolean literal
let color= null;// Null
let list;//undefined

//ex1:
console.log(name);
name=name +"Smith";
console.log(name);

let message1 =name +" is "+age;//concatenate

let message2 =`${name} is ${age}`;//modern way to concatenate

console.log(message1);
console.log(message2);

//ex2:

console.log(age);
age =age /5;
console.log(age);

//----------------------------------------------------------------

//Array Literals

const number=new Array(1,2,3,4,5);// old way to declare an array
const number1=[5,4,3,2,1];// new way to declare an array
const colors = ["red", "blue", "green"];
//ex1:

console.log(number);
number[2]=9;//change the value of index 2 in first array to 9
console.log(number);
console.log(number1);

//ex2:

console.log(colors);// output the original array
colors[3]="black";//add a new color into colors array
console.log(colors);
colors.push("white")
console.log(colors);
let lastcolor = colors.pop();// remove the last element in an array
console.log(colors);
console.log(lastcolor);// print out the removed element

//ex3:

let firstcolor=colors.shift();//remove the first item in an array
console.log(colors);
console.log(firstcolor);// print out the removed element

//ex4:

console.log(colors.indexOf('blue'));// get the index of an element

//ex5:

const myArray=["red",4,true,null,[1,2,3]]//an array can contains multiple data types

console.log(myArray);

console.log(myArray[4])// output the 4th element in myArray [1,2,3]

console.log(myArray[4][0])//output the first element of 4th element in myArray

//----------------------------------------------------------------

//Object Literals

let firsName = "John";
let lastName = "Smith";
age = 30;

//the same way as the declaration above
const person={
    firstname:"John",
    lastname:"Smith",
    age:30,
    pets:["dogs","cats"],
    address:{
        Street: "123 Street",
        City: "Long Beach",
        State:"California"
    }
}

//Dot notation
console.log(person.age);

//Bracet Notation
console.log(person["lastname"]);//the same as dot notation

let key="lastname";// create a variable for lastname

console.log(person[key]);//the same as console.log(person["lastname"])

console.log(person.address);// out put the address

//add element to the object person
person.email="John.Smith@csulb.edu";//create a new object inside the person object

console.log(person.email);//output the object email

//Deconstructive
const { firstname, lastname, address:{City}} = person;
console.log(firstname, lastname, City);

//ex1:
const people = [
    {
    firstname: "John",
    lastname: "Smith",
    age: 30,
    pets: ["dogs", "cats"],
    address: {
        Street: "123 Street",
        City: "Long Beach",
        State: "California"
    }
},
    {
        firstname: "Mary",
        lastname: "Smith",
        age: 30,
        pets: ["dogs", "cats"],
        address: {
            Street: "321 Street",
            City: "Garden Grove",
            State: "California"
        }
    }
]

const peopleJSOn= JSON.stringify(people);// API information from a server

console.log(peopleJSOn);

console.log(JSON.parse(peopleJSOn));// convert peopleJSON back to object

//----------------------------------------------------------------

//Function

//Traditional Function
function hello(Firstname, Lastname){
    console.log(`Hello ${Firstname} ${Lastname}`);
}// create a hello function that take to parameter

hello("John","Smith");

//ex:
function convertPercent(number){
    return number/100;
}//create a convertPercent function that has one paramenter

convertPercent(50);// internal calculation

console.log(convertPercent("John"));// NAN (not a number) output because John is not a number


//Arrow Function
const ConvertPercent= (num)=>{
    return num/100;
}// Another way to declare a function
console.log(ConvertPercent(75));

console.log(ConvertPercent("John"));//NAN output

//----------------------------------------------------------------

//Loop

//While Loop
console.log("--------------------------");
console.log("While Loop");
let i=0;
while(i<10){
    console.log(i);
    i++;//increments value i
}//while loop output the i value for i less than 10


//For Loop
console.log("--------------------------");
console.log("For Loop");
for(let i=0; i<10;i++){
    console.log(i);
}// the same out put as above loop

//ex1:
console.log("-----First Loop-----")
for(let x=0;x<people.length;x++){
    console.log(people[x]);
}//output the object in people object

//ex2:
console.log("-----Second Loop-----")
for(let person of people){
    console.log(person);
}// shorter for loop for the same output

//----------------------------------------------------------------

//High Order Array Method
console.log("--------------------------");
console.log("High Order Array Method");
people.forEach(function(person){
    console.log(person);
});

//Map
//Using map to pull out objects into a new array
const personName=people.map(person =>person.firstname);// create an array of only the firstname of people object

console.log(personName);

//Filter
//Select only the object(s) that satisfy the condition of the filter into an array
const personAgelessThan30=people.filter(person=>person.age<30);
//only output the object that has age is less than 30
console.log(personAgelessThan30);

//----------------------------------------------------------------

//Condictionals
//If the statment satisfy the condition, do something
//"==="equal to the data type and also the value
//"=="equal to the value
//"!=="not equal
//"&&"and
//"||"or

let gamma="red";
console.log("-----if gamma is red-----")
if(gamma=="red"){
    console.log(true);//if gamma =red, output ture
}
else {
    console.log(false);//else output false
}

//ex1:
console.log("-----If a<b-----")
a=1;
b=2;
function eval(){
    return a<b
}

console.log(eval());

//ex2:
//ternary operator (short hand if statement)
console.log("-----Ternary cats-----")
let animal="cats";
const likeCats=animal==="cat"?true:false;
console.log(likeCats);

//ex3:
//Switch
console.log("-----Switch dogs-cats-----")
switch(animal){
    case "dogs":
        console.log("dogs");//output dogs if animal=dogs
        break
    case "cats":
        console.log("cats");//output cats if animal=cats
        break
    default:
        console.log("Neither");//default statement
        //output Neither if animal!==dogs and animal!==cats
        break
}
//----------------------------------------------------------------

//DOM-Document Object Model
//Interact and manipulate on webpage
//Tree structure

//Single Element Selectors
const list1= document.getElementById("list");
console.log(list1);

//querySelector
//select item by tag, id, etc.
//"#" is to select id
//"." is to select class
//only select the first item matched the condition
const list2=document.querySelector("ul");//only one ul on the page
console.log(list2);


//Multiple Element Selectors
const listItems=document.querySelectorAll(".list-item");
console.log(listItems);

listItems.forEach(item =>{console.log(item.textContent)})

//DOM manipulation
//remove

const list3 = document.querySelector("#list");

list3.firstElementChild.remove();//remove the first element in the list
list3.lastElementChild.innerHTML="<h1>new Item</h1>"//set a new text context for the last element
list3.firstElementChild.style.background="blue"//change the background of the second element in the list
