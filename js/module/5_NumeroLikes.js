// 5. Número de Likes
// Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

// Por ejemplo:

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.

// // escribe tu respuesta acá

// // código de prueba
// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

// // Alternativa 1: Utilizando condicionales if-else
// function likes(num) {
//     if (num < 1000) {
//       return num.toString();
//     } else if (num < 1000000) {
//       return Math.floor(num / 1000) + "K";
//     } else {
//       return Math.floor(num / 1000000) + "M";
//     }
//   }
//   console.log(likes(983));     // "983"
//   console.log(likes(1900));    // "1K"
//   console.log(likes(54000));   // "54K"
//   console.log(likes(120800));  // "120K"
//   console.log(likes(25222444));// "25M"
    
// // Alternativa 2: Utilizando el operador condicional ternario
// function likes(num) {
//     return num < 1000 ? num.toString() : num < 1000000 ? Math.floor(num / 1000) + "K" : Math.floor(num / 1000000) + "M";
//   }
//   console.log(likes(983));     // "983"
//   console.log(likes(1900));    // "1K"
//   console.log(likes(54000));   // "54K"
//   console.log(likes(120800));  // "120K"
//   console.log(likes(25222444));// "25M"

// //Alternativa 3: Utilizando el método toLocaleString()

// function likes(num) {
//     return num < 1000 ? num.toString() : num.toLocaleString('en-US', {
//       notation: 'compact',
//       compactDisplay: 'short'
//     });
//   }
//   console.log(likes(983));     // "983"
//   console.log(likes(1900));    // "1K"
//   console.log(likes(54000));   // "54K"
//   console.log(likes(120800));  // "120K"
//   console.log(likes(25222444));// "25M"

// //Alternativa 4: Utilizando una función auxiliar para formatear el número

// function formatNumber(num) {
//     if (num < 1000) {
//       return num.toString();
//     } else if (num < 1000000) {
//       return (num / 1000).toFixed(0) + "K";
//     } else {
//       return (num / 1000000).toFixed(0) + "M";
//     }
//   }
    
//   console.log(likes(983));     // "983"
//   console.log(likes(1900));    // "1K"
//   console.log(likes(54000));   // "54K"
//   console.log(likes(120800));  // "120K"
//   console.log(likes(25222444));// "25M"


//Alternativa 5: Utilizando un objeto para mapear los rangos de números
// const formatLikes = {
//     lessThan1000: num => num.toString(),
//     lessThan1Million: num => Math.floor(num / 1000) + "K",
//     otherwise: num => Math.floor(num / 1000000) + "M"
//   };
  
//   function likes(num) {
//     if (num < 1000) {
//       return formatLikes.lessThan1000(num);
//     } else if (num < 1000000) {
//       return formatLikes.lessThan1Million(num);
//     } else {
//       return formatLikes.otherwise(num);
//     }
//   }

//   console.log(likes(983));     // "983"
//   console.log(likes(1900));    // "1K"
//   console.log(likes(54000));   // "54K"
//   console.log(likes(120800));  // "120K"
//   console.log(likes(25222444));// "25M"
  