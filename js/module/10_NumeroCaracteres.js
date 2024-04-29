// 10. Número de caracteres
// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

// //Solución 1: Usando un bucle for y comparando cada caracter
// function numeroDeCaracteres(str, char) {
//     let contador = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         contador++;
//       }
//     }
//     return contador;
//   }
  
//   console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
//   console.log(numeroDeCaracteres("MMMMM", "m")) // 0
//   console.log(numeroDeCaracteres("eeee", e)) // 4


//Solución 2: Usando el método split() y length
// function numeroDeCaracteres(str, char) {
//     return str.split(char).length - 1;
//   }

//   console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
//   console.log(numeroDeCaracteres("MMMMM", "m")) // 0
//   console.log(numeroDeCaracteres("eeee", e)) // 4
  
  
// //Solución 3: Usando expresiones regulares y el método match()
// function numeroDeCaracteres(str, char) {
//     const regex = new RegExp(char, 'g');
//     const matches = str.match(regex);
//     return matches ? matches.length : 0;
//   }
 
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", e)) // 4

// //Solución 4: Usando el método replace() y length
// function numeroDeCaracteres(str, char) {
//     return str.length - str.replace(new RegExp(char, 'g'), '').length;
//   }
//   console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
//   console.log(numeroDeCaracteres("MMMMM", "m")) // 0
//   console.log(numeroDeCaracteres("eeee", e)) // 4

// //Solución 5: Usando el método reduce()
// function numeroDeCaracteres(str, char) {
//     return str.split('').reduce((contador, c) => {
//       return c === char ? contador + 1 : contador;
//     }, 0);
//   }
//   console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
//   console.log(numeroDeCaracteres("MMMMM", "m")) // 0
//   console.log(numeroDeCaracteres("eeee", e)) // 4  

