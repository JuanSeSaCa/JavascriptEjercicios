// // 12. Multiplicar arreglo
// // Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.


// //Solución 1: Usando un bucle for
// function multiplicarArreglo(arr) {
//     let producto = 1;
//     for (let i = 0; i < arr.length; i++) {
//       producto *= arr[i];
//     }
//     return producto;
//   }
//   console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
//   console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
//   console.log(multiplicarArreglo([])) // 1  

// //Solución 2: Usando el método reduce()
// function multiplicarArreglo(arr) {
//     return arr.reduce((producto, num) => producto * num, 1);
//   }
//   console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
//   console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
//   console.log(multiplicarArreglo([])) // 1

// //Solución 3: Usando el método forEach()
// function multiplicarArreglo(arr) {
//     let producto = 1;
//     arr.forEach(num => {
//       producto *= num;
//     });
//     return producto;
//   }
//   console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
//   console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
//   console.log(multiplicarArreglo([])) // 
  
// //Solución 4: Usando recursión
// function multiplicarArreglo(arr) {
//     if (arr.length === 0) {
//       return 1;
//     }
//     return arr[0] * multiplicarArreglo(arr.slice(1));
//   }
//   console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
//   console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
//   console.log(multiplicarArreglo([])) // 1

// //Solución 5: Usando el operador spread y el método reduce()
// function multiplicarArreglo(arr) {
//     return [...arr].reduce((producto, num) => producto * num, 1);
//   }
//   console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
//   console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
//   console.log(multiplicarArreglo([])) // 1
