// // 15. Transcribir ADN a ARN
// // Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// // Los complementos son los siguientes:

// // G -> C
// // C -> G
// // T -> A
// // A -> U
// // // escribe tu función acá

// // código de prueba
// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

//1. Usando replace con una expresión regular:
// function transcribir(adn) {
//     return adn.replace(/G|C|T|A/g, function(match) {
//       switch (match) {
//         case 'G': return 'C';
//         case 'C': return 'G';
//         case 'T': return 'A';
//         case 'A': return 'U';
//       }
//     });
//   }
//   console.log(transcribir("ACGT")) // "UGCA"
//   console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

//2. Usando un objeto de mapeo:
// function transcribir(adn) {
//     const mapa = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
//     let arn = '';
//     for (let base of adn) {
//       arn += mapa[base];
//     }
//     return arn;
//   }
//   console.log(transcribir("ACGT")) // "UGCA"
//   console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

//3. Usando un array de mapeo:
// function transcribir(adn) {
//     const mapa = ['C', 'G', 'A', 'U'];
//     let arn = '';
//     for (let base of adn) {
//       arn += mapa['GCTA'.indexOf(base)];
//     }
//     return arn;
//   }
//   console.log(transcribir("ACGT")) // "UGCA"
//   console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

//4. Usando split y map:
// function transcribir(adn) {
//     return adn.split('').map(base => {
//       switch (base) {
//         case 'G': return 'C';
//         case 'C': return 'G';
//         case 'T': return 'A';
//         case 'A': return 'U';
//       }
//     }).join('');
//   }
//   console.log(transcribir("ACGT")) // "UGCA"
//   console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

// //5. Usando recursividad: 
// function transcribir(adn) {
//     if (adn === '') return '';
//     const base = adn[0];
//     const complemento = base === 'G' ? 'C' : base === 'C' ? 'G' : base === 'T' ? 'A' : 'U';
//     return complemento + transcribir(adn.slice(1));
//   }
//   console.log(transcribir("ACGT")) // "UGCA"
//   console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
