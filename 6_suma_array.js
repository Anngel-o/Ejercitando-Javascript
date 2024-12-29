// Suma de elementos en un array
//Descripción: Dado un array de números, devuelve la suma de todos sus elementos.
//Pistas: Usa un bucle o el método reduce().

let suma = 0;
const array = Array.from({ length: 10 }, (_, i) => (i = i + 1));
array.map((i) => {
  suma += i;
});

console.log(array);
console.log(suma);
