"use strict";
// union types -> zmienna moze miec jeden z kilku mozliwych typów
var value;
//value = false -> BŁĄD, value nie moze byc boolem
value = '15';
value = 15;
var value2;
value2 = "hej";
var person = {
    name: "Kacper",
    employeeId: 0
};
var userId = 234; // nic innego niż let userId: number
var names = ["Alice", "Bob", "Charlie"]; // nic innego niż const names: string[]
// keyof -> jest używany do uzyskiwania zbioru kluczy danego typu, obiektu
var user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
console.log(Object.keys(user)); // ["id", "name", "email"]
