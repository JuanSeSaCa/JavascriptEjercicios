// 14. Sumar arreglo entre el rango
// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

// Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

// // escribe tu respuesta acá

// // código de prueba

// Opción 1: Bucle for
// function sumarArreglo(arreglo, inicio, fin) {
//     let suma = 0;
//     for (let i = inicio; i <= fin; i++) {
//       suma += arreglo[i];
//     }
//     return suma; }
//     console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
//     console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
//     console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

//Opción 2: Método slice y reduce
// function sumarArreglo(arreglo, inicio, fin) {
//     return arreglo.slice(inicio, fin + 1).reduce((acum, valor) => acum + valor, 0);
//   }
  
//   console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
//   console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

//Opción 3: Bucle while
// function sumarArreglo(arreglo, inicio, fin) {
//     let suma = 0;
//     let i = inicio;
//     while (i <= fin) {
//       suma += arreglo[i];
//       i++;
//     }
//     return suma;
//   }
//   console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
//   console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

//Opción 4: Método forEach con condicional
// function sumarArreglo(arreglo, inicio, fin) {
//     let suma = 0;
//     arreglo.forEach((valor, indice) => {
//       if (indice >= inicio && indice <= fin) {
//         suma += valor;
//       }
//     });
//     return suma;
//   }
//   console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
//   console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

//Opción 5: Recursividad
// function sumarArreglo(arreglo, inicio, fin) {
//     if (inicio > fin) return 0;
//     return arreglo[inicio] + sumarArreglo(arreglo, inicio + 1, fin);
//   }
//   console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
//   console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
//   console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0