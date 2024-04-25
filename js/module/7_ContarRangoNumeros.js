// 7. Contar rango de números
// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// // escribe tu respuesta acá

// // código de prueba
// console.log(contarRango(1, 9)) // 7
// console.log(contarRango(1332, 8743)) // 7410
// console.log(contarRango(5, 6)) // 0

// //Alternativa 1: Utilizando un ciclo for
// function contarRango(inicio, fin) {
//     let contador = 0;
//     for (let i = inicio + 1; i < fin; i++) {
//       contador++;
//     }
//     return contador;
//   }
//   console.log(contarRango(1, 9));       // 7
//   console.log(contarRango(1332, 8743)); // 7410
//   console.log(contarRango(5, 6));       // 0
  
// //Alternativa 2: Utilizando un ciclo while
// function contarRango(inicio, fin) {
//     let contador = 0;
//     let i = inicio + 1;
//     while (i < fin) {
//       contador++;
//       i++;
//     }
//     return contador;
//   }
//   console.log(contarRango(1, 9));       // 7
//   console.log(contarRango(1332, 8743)); // 7410
//   console.log(contarRango(5, 6));       // 0

// // //Alternativa 3: Utilizando la fórmula matemática de la suma de una progresión aritmética
// function contarRango(inicio, fin) {
//     return fin - inicio - 1;
//   }
//   console.log(contarRango(1, 9));       // 7
//   console.log(contarRango(1332, 8743)); // 7410
//   console.log(contarRango(5, 6));       // 0

// //Alternativa 4: Utilizando el método Array.from() y la propiedad length
// function contarRango(inicio, fin) {
//     return Array.from({ length: fin - inicio - 1 }).length;
//   }
  
//   console.log(contarRango(1, 9));       // 7
//   console.log(contarRango(1332, 8743)); // 7410
//   console.log(contarRango(5, 6));       // 0

// //Alternativa 5: Utilizando recursión
// function contarRango(inicio, fin) {
//     if (fin - inicio <= 1) {
//       return 0;
//     } else {
//       return 1 + contarRango(inicio, fin - 1);
//     }
//   }
//   console.log(contarRango(1, 9));       // 7
//   console.log(contarRango(1332, 8743)); // 7410
//   console.log(contarRango(5, 6));       // 0

