// Variables
var myList = ["apples", "oranges", "bananas"];
var myArray = [1, 2, 3, 4, 5];
var shoppingList = [
  ["protein shake", 1],
  ["sauce", 2],
  ["creatine", 1],
  ["pre-workout", 3],
];
var removedFromMyArray = myArray.pop();
var removedFromMyArray = myArray.shift();

var ourArray = [
  [1, 2, 3, 4, 5],
  [4, 5, 6],
  [[[22, 36, 72], 2345], 21],
];

var myData = myArray[myArray.length - 1];
var String = "Jellow World";
var remainder = 2;
var number = 4;
var myName = "beau" + "tiful";
var ourStr = myName;
var firstLetterOfFirstName;
var boolean = false;
var myQuotedString = 'This is a "word" in a \n quote.';
var ourData = ourArray[2][0][0][2];
// Funtions
function wordBlanks(one, two, three, four) {
  var completeTheSentence = "Function: ";
  completeTheSentence += four + three + two + one + three;
  return completeTheSentence;
}

function ourReusableFunction() {
  console.log("hello world");
}

function reusableFunction() {
  console.log("Hi World");
}

function ourFunctionWithArgs(a, b) {
  console.log(a * b);
}

//
firstLetterOfFirstName = ourStr[0];
remainder += number;
ourStr += " she is";
ourStr = ourStr.length;
lastLetterOfString = String[String.length - 1];
// myArray[myArray.length - 1] = 99
myList.push("strawberries");
myList.unshift("pineapples");
ourArray.unshift([213, 124, 51, 210123]);

// Console Log
console.log(myName + " hello world");
console.log(remainder);
console.log(myQuotedString);
console.log(ourStr);
console.log(myList);
console.log(firstLetterOfFirstName);
console.log(lastLetterOfString);
console.log(myArray[2]);
console.log(wordBlanks("1 ", "2 ", "3 ", "4 "));
console.log(wordBlanks("eat ", "to ", "like ", "I "));
console.log(ourArray);
console.log(boolean);
console.log(myData);
console.log(myArray);
console.log(ourData);
console.log(ourArray[0]);
console.log(shoppingList);
ourReusableFunction();
ourReusableFunction();
reusableFunction();
ourFunctionWithArgs(3, 2);

var myNumber = [01, 02, 03, 04, 05];
var removeFromMyNumber = myNumber.pop();
console.log(myNumber);

// global scope
var myGlobal = 10;

function fun2() {
    oopsGlobal = 5;
}

// Functions
function fun1() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGLobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    console.log(output);
    }
}

fun1();
fun2();

// local scope

// function myLocalScope() {
//     var myVar = 5;
//     console.log (myVar);
// }
// myLocalScope();
// console.log(myLocalScope)

var output = 50;

function xavier() {
    var output = 25;

    return output;
}

console.log(xavier());
console.log(fun1());

function minusSeven(num,word) {
    return num - 4 + word;
}
console.log(minusSeven(10,"string"));

var sum = 2;
function addThree() {
    sum += 3;
    return sum
}
console.log(addThree())

var changed = 0;

function change(a) {
    return (a + 5) / 3;
}

changed = change(10);

// Stand in Line
function nextInLine(arr, item) {
    arr.pop(item);
    return arr.unshift();
}

var testArr = [1,2,3,4,5];

console.log("before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes, that was true";
    }
    return "no, that was not true";
}

console.log(trueOrFalse(1));

function testEqual(val) {
    if (val == 12) {
        return "equal";
    }
    return "not Equal";
    }

console.log (testEqual("12"));