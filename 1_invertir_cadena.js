// Invertir una cadena
//Descripción: Escribe una función que tome una cadena como entrada y devuelva la misma cadena invertida.
//Pistas: Usa split(), reverse(), y join() o recorre la cadena manualmente.

function reverseChain(chair) {
  let chairReverse = chair.split("").reverse().join("");
  console.log(chairReverse);
}

reverseChain("Hola");
