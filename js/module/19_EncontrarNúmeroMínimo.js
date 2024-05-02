// 19. Encontrar el número mínimo
// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

// escribe tu función acá

// // código de prueba
// console.log(min([3, 9, 6])) // 3
// console.log(min([67, 35, 54, 26])) // 26
// console.log(min([5, 9, 2, 4, 5, 7])) // 2

// //1. Usando un bucle for:
// function min(numeros) {
//     let minimo = numeros[0];
//     for (let i = 1; i < numeros.length; i++) {
//       if (numeros[i] < minimo) {
//         minimo = numeros[i];
//       }
//     }
//     return minimo;
//   }

//   console.log(min([3, 9, 6])) // 3
//   console.log(min([67, 35, 54, 26])) // 26
//   console.log(min([5, 9, 2, 4, 5, 7])) // 2

// //2. Usando un bucle for...of:
// function min(numeros) {
//     let minimo = numeros[0];
//     for (let numero of numeros) {
//       if (numero < minimo) {
//         minimo = numero;
//       }
//     }
//     return minimo;
//   }

//   console.log(min([3, 9, 6])) // 3
//   console.log(min([67, 35, 54, 26])) // 26
//   console.log(min([5, 9, 2, 4, 5, 7])) // 2

// //3. Usando reduce:
// function min(numeros) {
//     return numeros.reduce((minimo, numero) => numero < minimo ? numero : minimo, numeros[0]);
//   }

//   console.log(min([3, 9, 6])) // 3
//   console.log(min([67, 35, 54, 26])) // 26
//   console.log(min([5, 9, 2, 4, 5, 7])) // 2

// //4. Usando recursividad
// function min(numeros) {
//     if (numeros.length === 1) return numeros[0];
//     const minimoRestante = min(numeros.slice(1));
//     return numeros[0] < minimoRestante ? numeros[0] : minimoRestante;
//   }

//   console.log(min([3, 9, 6])) // 3
//   console.log(min([67, 35, 54, 26])) // 26
//   console.log(min([5, 9, 2, 4, 5, 7])) // 2

// //5. Usando ordenamiento:
// function min(numeros) {
//     numeros.sort((a, b) => a - b); // Ordenar de menor a mayor
//     return numeros[0];
//   }
  
//   console.log(min([3, 9, 6])) // 3
//   console.log(min([67, 35, 54, 26])) // 26
//   console.log(min([5, 9, 2, 4, 5, 7])) // 2
