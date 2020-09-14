//Javascript Examples

/*var name = "Jack";
var age = "23";
var message = "Hi may name is " + name + "and I am " + age + "years old";

 Function 
//alert(message);*/

/*
Strings

var firstName = "John";
var lastName = "Smith";
var dateOfBirth = "10/10/2000";
var age = "19";
var profileImageURL = "";

var loginWelcomeMessage = "Welcome " + firstName + " " + lastName +  ". Happy " + age + "th Birthday";

 Developer Logging - Shift+Ctrl+J in browser 
console.log(loginWelcomeMessage);*/

/*
Javascript Numbers and Operators

var sum = 10 + 15;
var sub = 15 - 10;
var mul = 10 * 3;
var mod = 10%3;

var msg = "10/3 = 3 with remainder " + mod;
var result = 10*((5*5)-10);
console.log (result);*/


var myAccountBalance = 300;
var nikeSBShoes = 799.98;
var coupon = 500;

/*if(nikeSBShoes <= myAccountBalance){
    myAccountBalance -= nikeSBShoes;
    console.log("I bought these Shoes");
    console.log("Account Balance " + myAccountBalance);
}else if(nikeSBShoes - coupon <= myAccountBalance){
    console.log("Just Used a coupon");
    myAccountBalance -= nikeSBShoes - coupon;
   console.log("Account Balance " + myAccountBalance);
} else{    
    console.log("Can't afford these");
}*/

var val1 = 23;
var val2 = "23";

if(val1 === val2)
    {
        console.log("These is the same");
    }
else{
    console.log("One of these is not like the other");
}
