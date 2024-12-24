interface User {
    id: number,
    nick: string
    readonly password: string // tylko do odczytu
    description?: string // wartość opcjonalna
}

interface GreetFunction { // interfejs moze takze definiować sygnaturę funkcji
    (name: string): void;
}

const greet: GreetFunction = (name) => console.log(`witaj ${name}`);
greet("kacper");

const user1: User = {
    id: 1,
    nick: "kacperus",
    password: "123"
}

const user2: User = {
    id: 2,
    nick: "kacperus123",
    password: "123",
    description: "description lorem lorem"
}

console.log(user1.nick);
console.log(user2.description);
user2.description = "lorem lorem lorem";
console.log(user2.description);
// user2.password = "123" -> błąd, password tylko do odczytu (readonly) 

interface Animal {
    name: string,
    sound(): void
}

interface Cat extends Animal { // interfejsy mogą być też rozszerzalne, co umozliwa tworzenie bardziej złożonych struktur
    age: number
}

const Zbysiu: Cat = { 
    name: "Zbysiu",
    age: 1,
    sound: () => console.log(`cześć jestem ${Zbysiu.name} miau miau`)
}

Zbysiu.sound();

/* 
    zamiennikiem dla interface jest 'type' 
        różnice:
        - interfejsy mozna rozszerzać za pomocą extends, typy za pomocą '&',
        - typy są bardziej uniwersalne i mogą reprezentować m.in. unie
        - interfejsy sa preferowane do definiowania stuktur obiektów 
*/

type Flyable = {
    fly(): void
}

type Swimmable = {
    swim(): void
}

type Bird = Flyable & Swimmable;

const penguin: Bird = {
    fly: () => console.log('flying'),
    swim: () => console.log('swimming')
}

penguin.fly();