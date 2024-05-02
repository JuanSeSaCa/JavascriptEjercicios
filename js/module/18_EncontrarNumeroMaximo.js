// 18. Encontrar el número máximo
// Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

// Nota: Intentarlo hacer sin el método Math.max de JavaScript.

// escribe tu función acá

// código de prueba
// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

//1. Usando un bucle for:
// function max(numeros) {
//   let maximo = numeros[0];
//   for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maximo) {
//       maximo = numeros[i];
//     }
//   }
//   return maximo;
// }

// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

//2. Usando un bucle for...of:
// function max(numeros) {
//     let maximo = numeros[0];
//     for (let numero of numeros) {
//       if (numero > maximo) {
//         maximo = numero;
//       }
//     }
//     return maximo;
//   }

//   console.log(max([3, 9, 6])) // 9
//   console.log(max([67, 35, 54, 26])) // 67
//   console.log(max([5, 9, 2, 4, 5, 7])) // 9

// //3. Usando reduce:
// function max(numeros) {
//     return numeros.reduce((maximo, numero) => numero > maximo ? numero : maximo, numeros[0]);
//   }

//   console.log(max([3, 9, 6])) // 9
//   console.log(max([67, 35, 54, 26])) // 67
//   console.log(max([5, 9, 2, 4, 5, 7])) // 9

// //4. Usando recursividad:
// function max(numeros) {
//     if (numeros.length === 1) {
//       return numeros[0];
//     }
//     const maximoRestante = max(numeros.slice(1));
//     return numeros[0] > maximoRestante ? numeros[0] : maximoRestante;
//   }
  
//   console.log(max([3, 9, 6])) // 9
//   console.log(max([67, 35, 54, 26])) // 67
//   console.log(max([5, 9, 2, 4, 5, 7])) // 9

// //5. Usando ordenamiento:
// function max(numeros) {
//     numeros.sort((a, b) => b - a); // Ordenar de mayor a menor
//     return numeros[0];
//   }
  