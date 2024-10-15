console.log("Fizz-Buzz!");

/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi Buzz. Per i numeri che sono sia
multipli di 3 che di 5 stampi FizzBuzz. */

//
//

// Devo stampare numeri da 1 a 100
let num;

for (i = 0; i < 100; i++) {
  num = i + 1;

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

  // ALTRIMENTI stamperò il numero

  //   if (resto3 === 0 && resto5 === 0) {
  //     console.log("FizzBuzz");
  //   } else if (resto5 === 0) {
  //     console.log("Buzz");
  //   } else if (resto3 === 0) {
  //     console.log("Fizz");
  //   } else {
  //     console.log(num);
  //   }
  // }

  //
  // Versione con operatore ternario

  function stampa(resto3, resto5) {
    return resto3 && resto5
      ? console.log("FizzBuzz")
      : resto3
      ? console.log("Fizz")
      : resto5
      ? console.log("Buzz")
      : console.log(num);
  }
}
