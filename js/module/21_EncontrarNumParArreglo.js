// 21. Encontrar números pares en un arreglo
// Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

// escribe tu función acá

// código de prueba
// console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
// console.log(pares([])) // []

// //1. Usando filter y el operador módulo:
// function pares(numeros) {
//     return numeros.filter(numero => numero % 2 === 0);
//   }

//   console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
//   console.log(pares([])) // []

// //2. Usando filter y una función auxiliar:
// function esPar(numero) {
//     return numero % 2 === 0;
//   }
  
//   function pares(numeros) {
//     return numeros.filter(esPar);
//   }

//   console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
//   console.log(pares([])) // []

// //3. Usando un bucle for y push:
// function pares(numeros) {
//     const resultado = [];
//     for (let numero of numeros) {
//       if (numero % 2 === 0) {
//         resultado.push(numero);
//       }
//     }
//     return resultado;
//   }

//   console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
//   console.log(pares([])) // []

// //4. Usando reduce:
// function pares(numeros) {
//     return numeros.reduce((acumulador, numero) => {
//       if (numero % 2 === 0) {
//         acumulador.push(numero);
//       }
//       return acumulador;
//     }, []);
//   }

//   console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
//   console.log(pares([])) // []

// //5. Usando recursividad:
// function pares(numeros) {
//     if (numeros.length === 0) return [];
//     const [primero, ...resto] = numeros;
//     return primero % 2 === 0 ? [primero, ...pares(resto)] : pares(resto);
//   }

//   console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
//   console.log(pares([])) // []