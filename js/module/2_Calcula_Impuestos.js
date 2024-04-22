//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

function calcularImpuestos(edad, ingresos) {
    // Verificar si la edad es mayor o igual a 18 y los ingresos son mayores o iguales a 1000
    if (edad >= 18 && ingresos >= 1000) {
      // Calcular el 40% de los ingresos
      const impuesto = ingresos * 0.4;
      return impuesto;
    } else {
      // Si no se cumplen las condiciones, retornar 0
      return 0;
    }
  }
  console.log(calcularImpuestos(25, 2000)); // 800
  console.log(calcularImpuestos(17, 1500)); // 0
  console.log(calcularImpuestos(30, 500)); // 0
    