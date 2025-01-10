// Reemplazar todas las apariciones de un carácter en una cadena
//         Descripción: Cambia todas las apariciones de un carácter en una cadena por otro carácter.
//         Pistas: Usa replace() con expresiones regulares globales.

function replaceCharacter(originalString, chairToChange, newChair) {
  let result = originalString.replace(chairToChange, newChair);
  console.log("Cadena replace: " + result);
}

let string = "Hola mundo hola mundo hola mundo";
console.log("Cadena original: " + string);
replaceCharacter(string, "hola", "adios");

//EXPRESIONES REGULARES (REGEX)
let newString = string.replace(/hola/gi, "adios");
console.log("Cadena Regex: " + newString);

// g: Reemplaza todas las apariciones de una subcadena(palabra o caracter) en la cadena por otra.
// i: Insensible a mayúsculas/minúsculas.
// m: Permite coincidencias en múltiples líneas.
