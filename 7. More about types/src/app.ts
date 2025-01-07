// inferencja typów to mechanizm, który pozwala kompilatorowi automatycznie odgadnąć typ zmiennej, parametru, wyniku funkcji itp..

let message = "hello, typescript!"; // typ inferred jako 'string'
let count = 42; // typ inferred jako number
let isActive = true; // typ inferred jako boolean
let value; // typ inferred jako any
value = "42"; // any
value = 42; // any

function add(a: number, b: number) {
    return a + b; // typ inferred jako number
}

const result = add(2, 3); // typ inferred jako number

// Type Compatibility to to mechanizm w TypeScript, który określa, czy jeden typ może zostać przypisany do innego.

interface Animal {
    name: string
}

interface Dog {
    name: string
    breed: string
}

let animal: Animal = { name: "Zygmunt" };
let dog: Dog = { name: "Zbysiu", breed: "Golden Retriever" };

animal = dog; // OK, dog ma wszystkie właściwości animal
// dog = animal -> błąd, animal nie ma właściwości 'breed'
