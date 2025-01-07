let value: unknown; // typ użwany wtedy, gdy nie wiadomo jaki typ danych zostanie przypisany do zmiennej

value = 5; // OK
value = "pięć"; // OK

// console.log(value.toUpperCase()) -> błąd, poniewaz nie wiadomo jakiego typu jest value

if(typeof(value) === "string")
    console.log(value.toUpperCase()); // wykona sie tylko wtedy, gdy value jest ciągiem znakow, OK
