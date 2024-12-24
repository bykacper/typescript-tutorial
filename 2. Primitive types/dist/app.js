"use strict";
var myAge = 18;
var isOfAge = myAge >= 18 ? true : false;
if (isOfAge)
    console.log('pełnoletni!');
else
    console.log("niepełnoletni!");
function returningFunction() {
    return 0;
}
function notReturningFunction() {
    console.log("ta funkcja nic nie zwraca");
}
notReturningFunction();
var undefinedValue;
// undefinedValue = "siurek" -> błąd, poniewaz undefinedValue jest typowane jako :undefined
var myName; // albo string albo undefined
myName = "Kacper"; // OK
// myName = 18 // bład
myName = undefined; // OK
