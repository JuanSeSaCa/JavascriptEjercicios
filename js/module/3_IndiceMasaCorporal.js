// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula: peso / altura^2

// Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

function bmi(peso, altura) {
    // Calcular el BMI
    const bmi = peso / (altura ** 2);
  
    // Determinar la categoría según el BMI
    if (bmi < 18.5) {
      return "Bajo peso";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Peso normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Sobrepeso";
    } else {
      return "Obesidad";
    }
  }

  console.log(bmi(70, 1.75)); // "Normal"
  console.log(bmi(90, 1.80)); // "Sobrepeso"
  console.log(bmi(120, 1.70)); // "Obesidad"
  console.log(bmi(50, 1.65)); // "Bajo peso"
  