// union types -> zmienna moze miec jeden z kilku mozliwych typów

let value: string | number;

//value = false -> BŁĄD, value nie moze byc boolem
value = '15';
value = 15

type numberOrString = string | number;
let value2: numberOrString;

value2 = "hej";
// value2 = false; BŁAD, value2 nie moze byc boolem



// intersection types -> pozwala tworzyc typy, które łącza wlasciwosci kilku roznych typow
type Person = {
    name: string
}

type Employee = {
    employeeId: number
}

type PersonWithEmployee = Person & Employee;

const person: PersonWithEmployee = {
    name: "Kacper", 
    employeeId: 0
}


// type aliases -> to mechanizm pozwalający na nadawanie nazw istniejącym typom.
type ID = number;
let userId: ID = 234; // nic innego niż let userId: number

type StringArray = string[];
const names: StringArray = ["Alice", "Bob", "Charlie"] // nic innego niż const names: string[]


// keyof -> jest używany do uzyskiwania zbioru kluczy danego typu, obiektu

const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
  
console.log(Object.keys(user)); // ["id", "name", "email"]
