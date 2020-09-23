/*var name = "Jack";
var age = "23";
var message = "Hi may name is " + name + "and I am " + age + "years old";

 Function 
//alert(message);*/

/*var firstName = "John";
var lastName = "Smith";
var dateOfBirth = "10/10/2000";
var age = "19";
var profileImageURL = "";

var loginWelcomeMessage = "Welcome " + firstName + " " + lastName +  ". Happy " + age + "th Birthday";

/* Developer Logging - Shift+Ctrl+J in browser */
/*console.log(loginWelcomeMessage);*/

/* Javascript Logical Operators  */
/*if(1===1 && 2 === 2 || "joe" === "joe"){
    
    console.log("These are both true");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3DisabledHandicap = true;

if ((cat1 > cat2 && cat1> cat3) && !cat3DisabledHandicap){
    console.log("Cat 1 is the best");
}else if((cat2>cat1 && cat2>cat3) && !cat3DisabledHandicap){
    console.log("cat 2 is the best");
}else if((cat3>cat1 && cat3>cat2) || cat3DisabledHandicap){
    console.log("Cat 3 is the best");
}*/

/* Arrays 

var students = ["timmy", "vanessa", "john"];

var naughtyList = [];
naughtyList.push(students[0]);

var index = naughtyList.indexOf("timmy");
console.log(naughtyList);
var index2 = students.indexOf("john");

if(index>-1){
  naughtyList.splice(index,1);
}


console.log(naughtyList);*/

/* Fizzbuzz */

/*let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
} */

/* Rock Papers Scissors */


/* For Loops */

/*var total = 10;
for (var x = 0; x<total; x++){
    console.log(x);
}
    
var student = ["Scott", "john", "steve", "fiona", "wyatt"];

for (var index = 0; index < student.length; index++){
    console.log(student[index]);
}*/

/* Functions */

/*function area(length, width){
    return length * width;
}

var rectangleArea = [];
rectangleArea.push(area(10,15));
rectangleArea.push(area(14,2));
rectangleArea.push(area(15,4));

//var area1 = area(10,15);

console.log(rectangleArea)

var bankBalance = 500;

function makeTransaction(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Not Enough cash!");
    }
    
}

console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.32);

console.log(bankBalance);
makeTransaction(4.99);

console.log(bankBalance)
makeTransaction(500);

var transaction = function(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Not Enough cash!");
    }
}

var customerName = function(first,last){
    console.log("First Name: " + first + " Last Name" + last);
}

var applyForCreditCard = function(creditScore, soul){
    
}

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(customerName);
bankOperations.push(applyForCreditCard);

console.log(bankOperations);*/

/* Objects */

/*var students = [];

function student(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age; 
    this.greeting = function(){
    return "Hi I'm " + this.firstName + " and I'm " + this.age +
    " Years Old";
    };
}

students.push(new student("Jenny", "Lopez", 5));
students.push(new student("Timmy", "Turner", 5));
students.push(new student("Tim", "Turner", 5));
students.push(new student("Tina", "Turner", 5));*/

/*var student0 = {
    firstName: "Peter",
    lastName: "Parker",
    age: 7,
   
};

console.log(student0.greeting());

//Creates a new empty Object
var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Smith";
student1.age = 7;

var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Zack";
student2.age = 12;

var students = [];
students.push(student0);
students.push(student1);
students.push(student2);

for (var index = 0; index < students.length; index++){
    var student = students[index];
    console.log(student.greeting());
}*/

/* Bind Function */

/*this.car = "Honda Civic"

var scottsGarage = {
    
    car: "Aston Martin",
    getCar: function(){
        return this.car;
    }  
};

console.log(scottsGarage.getCar());

var storeGetCarForLater = scottsGarage.getCar;

console.log(storeGetCarForLater());

var theRealCarFunction = scottsGarage.getCar.bind(scottsGarage);
console.log(theRealCarFunction);*/





















