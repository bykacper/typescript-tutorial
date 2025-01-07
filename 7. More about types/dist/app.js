"use strict";
// inferencja typów to mechanizm, który pozwala kompilatorowi automatycznie odgadnąć typ zmiennej, parametru, wyniku funkcji itp..
var message = "hello, typescript!"; // typ inferred jako 'string'
var count = 42; // typ inferred jako number
var isActive = true; // typ inferred jako boolean
var value; // typ inferred jako any
value = "42"; // any
value = 42; // any
function add(a, b) {
    return a + b; // typ inferred jako number
}
var result = add(2, 3); // typ inferred jako number
var animal = { name: "Zygmunt" };
var dog = { name: "Zbysiu", breed: "Golden Retriever" };
animal = dog; // OK, dog ma wszystkie właściwości animal
// dog = animal -> błąd, animal nie ma właściwości 'breed'
