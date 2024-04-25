    //4. Imprimir un arreglo
    // Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

    // // escribe tu respuesta acá

    // // código de prueba
    // console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
    // // 1
    // // Hola
    // // 2
    // // Mundo


// function imprimirArreglo(arr) {
//     for(let i=0; i< arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// // código de prueba
// imprimirArreglo([1, "Hola", 2, "Mundo"]);
// console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]));

// function imprimirArreglo(...arr) {
//     arr.forEach(elemento => {
//         console.log(elemento);
//     });
// }
// function imprimirArreglo(...arr) {
//     arr.map(elemento => console.log(elemento));
// }
// console.log(imprimirArreglo = [1, "Hola", 2, "Mundo"]);

// function imprimirArreglo() {
//     for (let i = 0; i < arguments.length; i++) {
//       console.log(arguments[i]);
//     }
//   }
// console.log(imprimirArreglo = [1, "Hola", 2, "Mundo"]);

function imprimirArreglo() {
    Array.from(arguments).forEach(elemento => {
      console.log(elemento);
    });
  }
console.log(imprimirArreglo = [1, "Hola", 2, "Mundo"]);
