// // 9. Número de aes (letra "a")
// // Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

// // escribe tu respuesta acá
// //Solución 1: Usando un bucle for y comparando cada caracter
// function numeroDeAes(str) {
//     let contador = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'a' || str[i] === 'A') {
//         contador++;
//       }
//     }
//     return contador;
//   }
//   console.log(numeroDeAes("abracadabra")) // 5
//   console.log(numeroDeAes("etinol")) // 0
//   console.log(numeroDeAes("")) // 0  

// //Solución 2: Usando el método split() y length
// function numeroDeAes(str) {
//     return str.split('a').length - 1;
//   }
//   console.log(numeroDeAes("abracadabra")) // 5
//   console.log(numeroDeAes("etinol")) // 0
//   console.log(numeroDeAes("")) // 0

// //Solución 3: Usando expresiones regulares y el método match()
// function numeroDeAes(str) {
//     const matches = str.match(/a/gi);
//     return matches ? matches.length : 0;
//   }
//   console.log(numeroDeAes("abracadabra")) // 5
//   console.log(numeroDeAes("etinol")) // 0
//   console.log(numeroDeAes("")) // 0

// //Solución 4: Usando el método replace() y length
// function numeroDeAes(str) {
//     return str.length - str.replace(/a/gi, '').length;
//   }
// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0
  

// //Solución 5: Usando el método reduce()
// function numeroDeAes(str) {
//     return str.split('').reduce((contador, char) => {
//       return char.toLowerCase() === 'a' ? contador + 1 : contador;
//     }, 0);
//   }

// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0