// Eliminar duplicados en un array
//         Descripción: Devuelve un array sin elementos duplicados.
//         Pistas: Usa un Set o filtra manualmente los elementos.

const array = [1, 1, 2, 3, 4, 5, 6, 6];
const set = new Set(array);
const filteredArray = [...set];

//Usando Set
console.log(`El array original es ${array}`);
console.log(`El set sin duplicados es ${filteredArray}`);

//Usando .filter
const arrayFilter = array.filter((i) => {
  let element = i;
  if (element) {
  }
});

console.log(`El array sin duplicados usando .filter es ${arrayFilter}`);
