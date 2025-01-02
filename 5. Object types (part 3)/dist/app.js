"use strict";
// interface greeting {
//     greet(): void
// }
// class Person implements greeting {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(): void {
//         console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// const Kacper = new Person("Kacper", 18);
// Kacper.greet();
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
console.log(Direction.Down); // Wyświetli '1'
console.log(Direction[0]); // Wyświetli 'Up'
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right"; // 4
})(Direction2 || (Direction2 = {}));
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
console.log(Status.Success); // Wyświetli 'SUCCESS'
var Result;
(function (Result) {
    Result["Pass"] = "PASS";
    Result[Result["Fail"] = 0] = "Fail";
})(Result || (Result = {}));
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 1] = "A";
    Enum[Enum["B"] = 6] = "B"; // Wartość zostanie obliczona podczas kompilacji
})(Enum || (Enum = {}));
console.log(Enum.B); // Wyświetli '6'
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors["Blue"] = "Niebieski";
})(Colors || (Colors = {}));
function paint(color) {
    console.log("Painting in color: ".concat(color));
}
// paint('zielony'); błąd, ponieważ zielony nie jest w zakresie enuma Colors
paint(Colors.Green); // jako parametr zostanie przeakazne 1
paint(Colors.Blue); // jako parametr zostanie przekazane "Niebieski"
