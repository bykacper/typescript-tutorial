interface Barking {
    bark(): void;
}

class Animal {
    public name: string;
    public age: number;
    private description?: string

    constructor(name: string, age: number, description?: string) {
        this.name = name;
        this.age = age
        this.description = this.description
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class Dog extends Animal implements Barking  {
    bark(): void {
        console.log(`Woof! I am ${this.age} years old!`);
    }
}

const Zbigniew = new Dog("Zbigniew", 1);

Zbigniew.bark();