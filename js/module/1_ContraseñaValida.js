//Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

function contrasenaValida(contrasena) {
    // Contraseñas válidas
    const contrasenasValidas = ["2Fj(jjbFsuj", "eoZiugBf&g9"];
  
    // Verificar si la contraseña proporcionada coincide con alguna de las válidas
    return contrasenasValidas.includes(contrasena);
  }

  console.log(contrasenaValida("2Fj(jjbFsuj")); // true
  console.log(contrasenaValida("eoZiugBf&g9")); // true
  console.log(contrasenaValida("OtraContrasena")); // false
  