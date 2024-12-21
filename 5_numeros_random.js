// Crear un array de números del 1 al 50 con numeros aleatorios

const array = [];
const numberRandom = Math.random() * 50;
console.log(Math.round(numberRandom));
console.log(Math.ceil(numberRandom));
console.log(Math.floor(numberRandom));
console.log(numberRandom.toFixed(2));

for (let i = 1; i <= 50; i++) {
  const numberRandom = Math.random() * 50;
  array[i] = Math.round(numberRandom);
}

for (let i = 1; i <= 50; i++) {
  console.log(array[i]);
}

const rango = Array.from({ length: 50 }, (_, i) => i + 1);
console.log(rango);
