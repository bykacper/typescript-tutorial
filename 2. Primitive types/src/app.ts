const myAge:number = 18;

const isOfAge:boolean = myAge >= 18 ? true : false;

if(isOfAge)
    console.log('pełnoletni!');
else
    console.log("niepełnoletni!")


function returningFunction() { // taej funkcji nie typuje sie :void, poniewaz zwraca jakakolwiek wartosc
    return 0;
}

function notReturningFunction(): void { // ta funkcja nie zwraca wartości, stąd typowanie :void 
    console.log("ta funkcja nic nie zwraca")
}

notReturningFunction();

let undefinedValue: undefined;
// undefinedValue = "siurek" -> błąd, poniewaz undefinedValue jest typowane jako :undefined

let myName: string | undefined; // albo string albo undefined
myName = "Kacper"; // OK
// myName = 18 // bład
myName = undefined; // OK

let nullValue: null; // działa tak samo jak undefined;
