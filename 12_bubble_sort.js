// Ordenar un array sin usar .sort()
//         Descripción: Ordena un array de números de menor a mayor.
//         Pistas: Implementa el algoritmo de ordenamiento por burbuja (bubble sort).

array = [7, 2, 1, 9, 11, 5, 15];

for (let i = 0; i < array.length; i++) {
  for (j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
