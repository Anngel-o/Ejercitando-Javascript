// Suma de elementos en un array
//Descripción: Dado un array de números, devuelve la suma de todos sus elementos.
//Pistas: Usa un bucle o el método reduce().

let suma = 0;
const array = Array.from({ length: 10 }, (_, i) => (i = i + 1));

array.forEach((i) => {
  suma += i;
});

// const suma = array.reduce((acumulador, valorActual) => {
//   return acumulador + valorActual;
// }, 0);

// array.reduce():Primer parámetro: Una función que toma dos argumentos: el acumulador y el valor actual. Esta función define cómo se va a acumular el resultado. En este caso, simplemente estamos sumando el acumulador y el valor actual.
// Segundo parámetro: 0 es el valor inicial del acumulador. Si no lo proporcionamos, el acumulador tomará el primer valor del array como inicio (lo que no es adecuado para una suma).

console.log(array);
console.log(suma);
