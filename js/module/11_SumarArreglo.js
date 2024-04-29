// // 11. Sumar arreglo
// // Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

// //Solución 1: Usando un bucle for
// function sumarArreglo(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//       suma += arr[i];
//     }
//     return suma;
//   }
//   console.log(sumarArreglo([3, 1, 2])) // 6
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
//   console.log(sumarArreglo([])) // 0

// //Solución 2: Usando el método reduce()
// function sumarArreglo(arr) {
//     return arr.reduce((suma, num) => suma + num, 0);
//   }
//   console.log(sumarArreglo([3, 1, 2])) // 6
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
//   console.log(sumarArreglo([])) // 0

// //Solución 3: Usando el método forEach()
// function sumarArreglo(arr) {
//     let suma = 0;
//     arr.forEach(num => {
//       suma += num;
//     });
//     return suma;
//   }
//   console.log(sumarArreglo([3, 1, 2])) // 6
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
//   console.log(sumarArreglo([])) // 0  

// //Solución 4: Usando recursión
// function sumarArreglo(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }
//     return arr[0] + sumarArreglo(arr.slice(1));
//   }
//   console.log(sumarArreglo([3, 1, 2])) // 6
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
//   console.log(sumarArreglo([])) // 0

// //Solución 5: Usando el operador spread y el método reduce()
// function sumarArreglo(arr) {
//     return [...arr].reduce((suma, num) => suma + num, 0);
//   }
//   console.log(sumarArreglo([3, 1, 2])) // 6
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
//   console.log(sumarArreglo([])) // 0

