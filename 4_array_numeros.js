// Crear un array de números del 1 al 50
//Descripción: Devuelve un array que contenga los números del 1 al 50.
//Pistas: Usa un bucle for o el método Array.from().

const array = [];

for (let i = 1; i <= 50; i++) {
  array[i] = i;
}

for (let i = 1; i <= 50; i++) {
  console.log(array[i]);
}

const rango = Array.from({ length: 50 }, (_, i) => i + 1);
console.log(rango);
//Array.from({ length: 50 }) crea un array de longitud 50, pero sus elementos inicialmente son undefined.

// _: El primer parámetro es el valor del elemento que se va a mapear. En este caso, como estamos trabajando con un objeto "array-like" que no tiene elementos (solo tiene una propiedad length), el valor de cada elemento es undefined, por lo que se utiliza el símbolo _ para indicar que no nos importa este valor. Este es un convenio común cuando el valor no se va a usar.
