console.log("Fizz-Buzz!");

/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi Buzz. Per i numeri che sono sia
multipli di 3 che di 5 stampi FizzBuzz. */

//
//

// Devo stampare numeri da 1 a 100

let num = i;

for (i = 0; i < 100; i++) {
  console.log(i + 1);
}

// Per sapere se numero è multiplo di n
// Dato un numero devo sapere quale sia il uso resto se diviso per n

const resto3 = num % 3; // [0,1,2]
const resto5 = num % 5; // [0,1,2,3,4]

// SE è multiplo di 3
//      => Dovrò stampare "Fizz"

// ALTRIMENTI SE è multiplo di 5
//      => Dovrò stampare "Buzz"

// ALTRIMENTI SE soddisfa entrambe le condizioni (multiplo 3 e di 5)
// Allora dovrà stampare "FizzBuzz"
