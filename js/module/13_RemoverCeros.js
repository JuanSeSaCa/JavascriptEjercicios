// // 13. Remover ceros
// // Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

// //Solución 1: Usando el método filter()
// function removerCeros(arr) {
//     return arr.filter(num => num !== 0);
//   }
//   console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
//   console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
//   console.log(removerCeros([0, 0, 0])) // []

// //Solución 2: Usando un bucle for y un arreglo auxiliar
// function removerCeros(arr) {
//     const resultado = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== 0) {
//         resultado.push(arr[i]);
//       }
//     }
//     return resultado;
//   }
//   console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
//   console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
//   console.log(removerCeros([0, 0, 0])) // []
  
// //Solución 3: Usando el método reduce()
// function removerCeros(arr) {
//     return arr.reduce((resultado, num) => {
//       if (num !== 0) {
//         resultado.push(num);
//       }
//       return resultado;
//     }, []);
//   }
//   console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
//   console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
//   console.log(removerCeros([0, 0, 0])) // []

// //Solución 4: Usando el operador spread y el método filter()
// function removerCeros(arr) {
//     return [...arr].filter(num => num !== 0);
//   }
//   console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
//   console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
//   console.log(removerCeros([0, 0, 0])) // []
  
// //Solución 5: Usando recursión
// function removerCeros(arr) {
//     if (arr.length === 0) {
//       return [];
//     }
//     const [primero, ...resto] = arr;
//     if (primero === 0) {
//       return removerCeros(resto);
//     }
//     return [primero, ...removerCeros(resto)];
//   }
//   console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
//   console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
//   console.log(removerCeros([0, 0, 0])) // []
  