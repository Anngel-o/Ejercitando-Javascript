// Encontrar el número mayor en un array
//         Descripción: Devuelve el número más grande de un array.
//         Pistas: Usa un bucle o el método Math.max() con el operador spread.

let array = [5, 7, 8, 9, 25, 15];
console.log(`El numero mas grande usando Math.max es: ` + Math.max(...array));

// Otra forma de hacerlo con un bucle
//el numero mas grande al inicio sera el primer numero de la primera posicion del array
let max = array[0];
//despues comparamos ese primer numero con los demas numeros de las demas posicions
//y actualizamos el numero mas grande
array.forEach((i) => {
  if (i > max) {
    max = i;
  }
});

console.log(`El numero mas grande es usando un ciclo for es ` + max);

// El operador Math.max es una función en JavaScript que devuelve el número más grande de una lista de números que se le pasa como argumento. Si no se proporcionan argumentos, devuelve -Infinity. Si alguno de los argumentos no es un número o no se puede convertir en uno, devuelve NaN.
// Dado que Math.max no acepta un array directamente, puedes usar el operador spread (...) para pasar los elementos de un array como argumentos
