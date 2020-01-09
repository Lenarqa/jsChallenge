console.log("hi from home js");

//alert("hi alerd");

var hello = "hello var text";
console.log(hello);

var num = 44;
console.log(num);

// write text in element with id = someText
document.getElementById('someText').innerHTML = 'Hello from home.js!'; 

    // ask you & write answear in variable
//var year = prompt("What is your age?"); 

//document.getElementById('year').innerHTML = year;

//numbers
 var int1 = 5;
 var double1 = 0.5;
 var string1 = "hello";
 var bool1 = false;

 console.log("int = " + int1);
 console.log("double = " + double1);
 console.log("String = " + string1);
 console.log("bool1 = " + bool1);

 int1--;
 console.log("new int1 = " + int1);

 int1 += 100;
 console.log("new int1 = " + int1);


 //functions
 function fun(){
     console.log("Hello from my function");
 }

 fun();
 

 function SayMyName(){
    var name = prompt("What is your name?");
    //alert("Hello " + name);
    document.getElementById("someText").innerHTML = "Hello " + name;
 }
 
 //SayMyName();

 function PlusFun(a,b){
    console.log(a+b);
 }

 PlusFun(100,50);

 //var name = prompt("What is your name ?");

 function SayMyName2 (yourName){
     document.getElementById("someText").innerHTML = "Hello " + yourName;
 }

 //SayMyName2(name);

 /*

 var i = 0;
 while (i < 100){
    console.log("i = " + i);
    i++;
}

*/

for(let i = 0; i < 100; i++){
    console.log("i2 = " + i);
}

let age = 18;
let yourName = "Bob";
let name = {first: "Bob", last: "Doe"}; //object
let true1 = true;
let gaden = ['apple', 'banana', 'oranges'];
let random;
let nothing = null;

let fruit = 'banana';
let moreFruit = 'banana\napple';

console.log(moreFruit);

console.log(fruit.length);

console.log(fruit.indexOf("l"));

console.log(fruit.slice(0,5));

console.log(fruit.replace("ban","") + "litics");

console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());

console.log(fruit.charAt(0));
console.log(fruit[0]);

let fridge = "apple,milk,blackberry,banana";
console.log(fridge.split(','));

let fruitArr = ['banana', 'orange', 'pineapples'];
//let fruitArr = new Array('banana', 'orange', 'pineApples');

//alert(fruitArr[2]);//access value at index 2nd;

fruitArr[3] = "apple";

console.log(fruitArr[3]);

console.log("fruit Array\n");
for(let i = 0; i < fruitArr.length; i++){
    console.log(fruitArr[i]);
}

//Common array methods;
console.log('to String() = ', fruitArr.toString());

console.log(fruitArr.join(' * '));

console.log("pop methods");
console.log(fruitArr, fruitArr.pop(), fruitArr)//last array element leave from array;
console.log(fruitArr.push('blackberry'), fruitArr);//add new element in the end of array

fruitArr[4] = 'new fruit item';
console.log(fruitArr);

fruitArr.shift();// remove first element from array;
console.log(fruitArr);

fruitArr.unshift('kivi');//add new first element in array
console.log(fruitArr);

let vegetables = ['asparagus', 'tomato', 'brocoli'];
let resArray = fruitArr.concat(vegetables);
console.log(resArray);

console.log(resArray.slice(1,4));

console.log(resArray.reverse());

console.log(resArray.sort());

let someNumbers = [5, 10, 2, 25, 45, 100];

console.log(someNumbers.sort(function(a,b){return a-b}));

console.log(someNumbers.sort(function(a,b){return b-a}));

let emptyArray = new Array();
for(let i = 0; i < 10; i++){
    emptyArray.push(i);
}

console.log(emptyArray);

//object in js
let student =  {
    first: "rafi", 
    last: "qazi", 
    age: 17, 
    height:170,

    GetStudentInfo: function(){
        return this.first + "\n" + this.last;
    },

    GetstudentAge: function(){
        return this.age;
    }
};

console.log(student.first);
console.log(student.last);
console.log(student.age);
console.log(student.height);

//how to change value
student.first = "not rafi";
console.log(student.first);

student.age++;
console.log(student.age);

console.log("\nNew information");
console.log(student.GetStudentInfo());
console.log(student.GetstudentAge());


//if else in js
//age = prompt("What is your age?");

if((age >= 18) && (age <= 35)){
    status = "not my audience";
}else{
    status = "my audience";
}

console.log("Answer " + status);


//switch

/*

let numDay = prompt("What is day today?");
//very importent to change variable type from string to int!
//method Number will help you!

switch(Number(numDay)){
    case 0:
        text = "Sunday weekend";
        break;
    case 5:
        text = "Fridey weekend";
        break;
    case 6:
        text = "Saturday weekend";
        break;
    default:
        text = "weekday";
}

console.log(text);

*/

