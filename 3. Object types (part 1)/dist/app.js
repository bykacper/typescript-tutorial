"use strict";
var greet = function (name) { return console.log("witaj ".concat(name)); };
greet("kacper");
var user1 = {
    id: 1,
    nick: "kacperus",
    password: "123"
};
var user2 = {
    id: 2,
    nick: "kacperus123",
    password: "123",
    description: "description lorem lorem"
};
console.log(user1.nick);
console.log(user2.description);
user2.description = "lorem lorem lorem";
console.log(user2.description);
var Zbysiu = {
    name: "Zbysiu",
    age: 1,
    sound: function () { return console.log("cze\u015B\u0107 jestem ".concat(Zbysiu.name, " miau miau")); }
};
Zbysiu.sound();
var penguin = {
    fly: function () { return console.log('flying'); },
    swim: function () { return console.log('swimming'); }
};
penguin.fly();
