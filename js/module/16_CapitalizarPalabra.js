// 16. Capitalizar palabra
// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

// escribe tu función acá

// código de prueba
// console.log(capitalizar("pedro")) // "Pedro"
// console.log(capitalizar("hola mundo")) // "Hola mundo"
// console.log(capitalizar("")) // ""

//Opción 1: Uso de charAt y slice
// function capitalizar(str) {
//     if (str === "") return "";
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
//   console.log(capitalizar("pedro")) // "Pedro"
// console.log(capitalizar("hola mundo")) // "Hola mundo"
// console.log(capitalizar("")) // ""

//Opción 2: Uso de substring
// function capitalizar(str) {
//     if (str === "") {
//       return "";
//     }
//     return str.substring(0, 1).toUpperCase() + str.substring(1);
// }
//   console.log(capitalizar("pedro")) // "Pedro"
//   console.log(capitalizar("hola mundo")) // "Hola mundo"
//   console.log(capitalizar("")) // ""

//Opción 3: Uso de expresiones regulares
// function capitalizar(str) {
//     return str.replace(/^[a-z]/, (match) => match.toUpperCase());
//   }
//   console.log(capitalizar("pedro")) // "Pedro"
//   console.log(capitalizar("hola mundo")) // "Hola mundo"
//   console.log(capitalizar("")) // ""

//Opción 4: Desestructuración de arrays
// function capitalizar(str) {
//     if (str === "") {
//       return "";
//     }
//     const [primera, ...resto] = str;
//     return primera.toUpperCase() + resto.join('');
//   }
//   console.log(capitalizar("pedro")) // "Pedro"
//   console.log(capitalizar("hola mundo")) // "Hola mundo"
//   console.log(capitalizar("")) // ""

//Opción 5: Uso de split y join
// function capitalizar(str) {
//     return str.split(' ')
//               .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
//               .join(' ');
//   }
//   console.log(capitalizar("pedro")) // "Pedro"
//   console.log(capitalizar("hola mundo")) // "Hola mundo"
//   console.log(capitalizar("")) // ""