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
