// // 20. Generar contraseña
// // Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

// // Las mayúsculas se reemplazan por minúsculas.
// // Se eliminan los espacios en blanco.
// // Reemplaza el caracter “a” por “4”.
// // Reemplaza el caracter “e” por “3”.
// // Reemplaza el caracter “i” por “1”.
// // Reemplaza el carater “o” por “0”.
// // // escribe tu función acá

// // código de prueba
// console.log(password("hola")) // "h0l4"
// console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
// console.log(password("")) // ""

// //1. Usando replace con expresiones regulares:
// function password(str) {
//     return str.toLowerCase()
//               .replace(/\s/g, "")
//               .replace(/a/g, "4")
//               .replace(/e/g, "3")
//               .replace(/i/g, "1")
//               .replace(/o/g, "0");
//   }

//   console.log(password("hola")) // "h0l4"
//   console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
//   console.log(password("")) // ""

// //2. Usando split, map y join:
// function password(str) {
//     return str.toLowerCase()
//               .split("")
//               .map(char => {
//                 switch (char) {
//                   case "a": return "4";
//                   case "e": return "3";
//                   case "i": return "1";
//                   case "o": return "0";
//                   default: return char;
//                 }
//               })
//               .join("");
//   }

//   console.log(password("hola")) // "h0l4"
//   console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
//   console.log(password("")) // ""

//   //3. Usando un objeto de mapeo y reduce:
//   function password(str) {
//     const mapa = { "a": "4", "e": "3", "i": "1", "o": "0" };
//     return str.toLowerCase()
//               .split("")
//               .reduce((nuevaStr, char) => nuevaStr + (mapa[char] || char), "");
//   }

//   console.log(password("hola")) // "h0l4"
//   console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
//   console.log(password("")) // ""

// //4. Usando un bucle for...of:
// function password(str) {
//     let nuevaStr = "";
//     for (let char of str.toLowerCase()) {
//       switch (char) {
//         case "a": nuevaStr += "4"; break;
//         case "e": nuevaStr += "3"; break;
//         case "i": nuevaStr += "1"; break;
//         case "o": nuevaStr += "0"; break;
//         default: nuevaStr += char;
//       }
//     }
//     return nuevaStr;
//   }
//   console.log(password("hola")) // "h0l4"
//   console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
//   console.log(password("")) // ""

// //5. Usando recursividad:
// function password(str) {
//     if (str === "") return "";
//     const char = str[0].toLowerCase();
//     const nuevoChar = char === "a" ? "4" : char === "e" ? "3" : char === "i" ? "1" : char === "o" ? "0" : char;
//     return nuevoChar + password(str.slice(1));
//   }

//   console.log(password("hola")) // "h0l4"
//   console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
//   console.log(password("")) // ""