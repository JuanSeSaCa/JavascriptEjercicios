// 17. Capitalizar cada palabra
// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

// // escribe tu función acá

// // código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""

// //Opción 1: Uso de split y map
// function capitalizar(str) {
//     return str.split(' ')
//               .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
//               .join(' ');
//   }
//   console.log(capitalizar("hola mundo")) // "Hola Mundo"
// console.log(capitalizar("make it real")) // "Make It Real"
// console.log(capitalizar("")) // ""


//Opción 2: Uso de expresiones regulares
// function capitalizar(str) {
//     return str.replace(/\b\w/g, letra => letra.toUpperCase());
//   }
//   console.log(capitalizar("hola mundo")) // "Hola Mundo"
//   console.log(capitalizar("make it real")) // "Make It Real"
//   console.log(capitalizar("")) // ""
  

//Opción 3: Bucle for y manipulación de strings
// function capitalizar(str) {
//     let resultado = str.charAt(0).toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//       resultado += str.charAt(i - 1) === ' ' ? str.charAt(i).toUpperCase() : str.charAt(i);
//     }
//     return resultado;
//   }

//   console.log(capitalizar("hola mundo")) // "Hola Mundo"
//   console.log(capitalizar("make it real")) // "Make It Real"
//   console.log(capitalizar("")) // ""

//Opción 4: Uso de split, map, y funciones de flecha
// function capitalizar(str) {
//     return str.split(' ')
//               .map(p => p[0].toUpperCase() + p.substr(1))
//               .join(' ');
//   }

//   console.log(capitalizar("hola mundo")) // "Hola Mundo"
//   console.log(capitalizar("make it real")) // "Make It Real"
//   console.log(capitalizar("")) // ""

//Opción 5: Método replace con función de callback
// function capitalizar(str) {
//     return str.replace(/(^|\s)\S/g, L => L.toUpperCase());
//   }
//   console.log(capitalizar("hola mundo")) // "Hola Mundo"
//   console.log(capitalizar("make it real")) // "Make It Real"
//   console.log(capitalizar("")) // ""