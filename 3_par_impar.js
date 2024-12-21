// Determinar si un número es par o impar
//Descripción: Escribe una función que determine si un número es par o impar.
//Pistas: Usa el operador %.

function isEven(number) {
  if (number % 2 === 0) {
    console.log(number + " es par");
  } else {
    console.log(number + " es impar");
  }
}

isEven(11);
