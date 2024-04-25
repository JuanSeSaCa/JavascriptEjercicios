// //8. Sumar rango de números
// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

// // escribe tu respuesta acá

// // código de prueba
// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 0

// //Alternativa 1: Utilizando un ciclo for
// function sumarRango(inicio, fin) {
//     let suma = 0;
//     for (let i = inicio; i <= fin; i++) {
//       suma += i;
//     }
//     return suma;
//   }
//   console.log(sumarRango(0, 10)) // 55
//   console.log(sumarRango(12, 14)) // 39
//   console.log(sumarRango(5, 5)) // 0  

// //Alternativa 2: Utilizando un ciclo while
// function sumarRango(inicio, fin) {
//     let suma = 0;
//     let i = inicio;
//     while (i <= fin) {
//       suma += i;
//       i++;
//     }
//     return suma;
//   }
//   console.log(sumarRango(0, 10)) // 55
//   console.log(sumarRango(12, 14)) // 39
//   console.log(sumarRango(5, 5)) // 0 

// //Alternativa 3: Utilizando la fórmula matemática de la suma de una progresión aritmética
// function sumarRango(inicio, fin) {
//     return ((fin - inicio + 1) * (inicio + fin)) / 2;
//   }
//   console.log(sumarRango(0, 10)) // 55
//   console.log(sumarRango(12, 14)) // 39
//   console.log(sumarRango(5, 5)) // 0 

// //Alternativa 4: Utilizando el método Array.from() y el método reduce()
// function sumarRango(inicio, fin) {
//     return Array.from({ length: fin - inicio + 1 }, (_, i) => inicio + i).reduce((suma, num) => suma + num, 0);
//   }
//   console.log(sumarRango(0, 10)) // 55
//   console.log(sumarRango(12, 14)) // 39
//   console.log(sumarRango(5, 5)) // 0 

// //Alternativa 5: Utilizando recursión
//   function sumarRango(inicio, fin) {
//     if (inicio === fin) {
//       return inicio;
//     } else {
//       return inicio + sumarRango(inicio + 1, fin);
//     }
//   }
//   console.log(sumarRango(0, 10)) // 55
//   console.log(sumarRango(12, 14)) // 39
//   console.log(sumarRango(5, 5)) // 0 