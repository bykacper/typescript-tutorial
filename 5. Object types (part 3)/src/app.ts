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

enum Direction { // enum to typ danych pozwalający na zdefiniowanie wartości, co czyni kod bardziej czytelnym
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

console.log(Direction.Down) // Wyświetli '1'
console.log(Direction[0]); // Wyświetli 'Up'

enum Direction2 { // enum liczbowy
    Up = 1, // 1
    Down, // 2
    Left, // 3
    Right // 4
}

enum Status { // enum stringowy
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

console.log(Status.Success); // Wyświetli 'SUCCESS'

enum Result { // enum heterologiczny
    Pass = "PASS",
    Fail = 0
}

enum Enum {
    A = 1,
    B = A + 5 // Wartość zostanie obliczona podczas kompilacji
}

console.log(Enum.B); // Wyświetli '6'

enum Colors {
    Red,
    Green, 
    Blue = "Niebieski"
}

function paint(color: Colors):void {
    console.log(`Painting in color: ${color}`);
}

// paint('zielony'); błąd, ponieważ zielony nie jest w zakresie enuma Colors
paint(Colors.Green); // jako parametr zostanie przeakazne 1
paint(Colors.Blue); // jako parametr zostanie przekazane "Niebieski"