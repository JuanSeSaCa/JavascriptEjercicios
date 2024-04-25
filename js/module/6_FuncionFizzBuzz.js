// 6. FizzBuzz
// Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

// "fizz" si el número es múltiplo de 3.
// "buzz" si el número es múltiplo de 5.
// "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
// // escribe tu respuesta acá

// // código de prueba
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

// //Alternativa 1: Utilizando condicionales if-else
// function fizzBuzz(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       return "fizzbuzz";
//     } else if (num % 3 === 0) {
//       return "fizz";
//     } else if (num % 5 === 0) {
//       return "buzz";
//     } else {
//       return num;
//     }
//   }
  
//   console.log(fizzBuzz(6));   // "fizz"
//   console.log(fizzBuzz(20));  // "buzz"
//   console.log(fizzBuzz(30));  // "fizzbuzz"
//   console.log(fizzBuzz(8));   // 8


// //Alternativa 2: Utilizando el operador condicional ternario

// function fizzBuzz(num) {
//     return num % 3 === 0 && num % 5 === 0 ? "fizzbuzz"
//            : num % 3 === 0 ? "fizz"
//            : num % 5 === 0 ? "buzz"
//            : num;
//   }
//   console.log(fizzBuzz(6));   // "fizz"
//   console.log(fizzBuzz(20));  // "buzz"
//   console.log(fizzBuzz(30));  // "fizzbuzz"
//   console.log(fizzBuzz(8));   // 8

//Alternativa 3: Utilizando un objeto para mapear las condiciones
// function fizzBuzz(num) {
//     const fizzBuzzMap = {
//       fizzbuzz: num => num % 3 === 0 && num % 5 === 0,
//       fizz: num => num % 3 === 0,
//       buzz: num => num % 5 === 0
//     };
  
//     for (const key in fizzBuzzMap) {
//       if (fizzBuzzMap[key](num)) {
//         return key;
//       }
//     }
  
//     return num;
//   }
  
//   console.log(fizzBuzz(6));   // "fizz"
//   console.log(fizzBuzz(20));  // "buzz"
//   console.log(fizzBuzz(30));  // "fizzbuzz"
//   console.log(fizzBuzz(8));   // 8

// //Alternativa 4: Utilizando un array y el método join()
// function fizzBuzz(num) {
//     const result = [];
  
//     if (num % 3 === 0) {
//       result.push("fizz");
//     }
//     if (num % 5 === 0) {
//       result.push("buzz");
//     }
  
//     return result.length > 0 ? result.join("") : num;
//   }
//   console.log(fizzBuzz(6));   // "fizz"
//   console.log(fizzBuzz(20));  // "buzz"
//   console.log(fizzBuzz(30));  // "fizzbuzz"
//   console.log(fizzBuzz(8));   // 8

//Alternativa 5: Utilizando una función auxiliar para comprobar la divisibilidad
function isDivisibleBy(num, divisor) {
    return num % divisor === 0;
  }
  
  function fizzBuzz(num) {
    const isDivisibleBy3 = isDivisibleBy(num, 3);
    const isDivisibleBy5 = isDivisibleBy(num, 5);
  
    if (isDivisibleBy3 && isDivisibleBy5) {
      return "fizzbuzz";
    } else if (isDivisibleBy3) {
      return "fizz";
    } else if (isDivisibleBy5) {
      return "buzz";
    } else {
      return num;
    }
  }

  console.log(fizzBuzz(6));   // "fizz"
  console.log(fizzBuzz(20));  // "buzz"
  console.log(fizzBuzz(30));  // "fizzbuzz"
  console.log(fizzBuzz(8));   // 8