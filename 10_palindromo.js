// Validar un palíndromo
//         Descripción: Determina si una palabra o frase es un palíndromo.
//         Pistas: Ignora espacios y compara la cadena original con su inverso.

let string = "Anita lava la tina";

//----------USANDO REGEX-----------------
// let stringClean = string.replace(/\s+/g, "").toLowerCase();
// let stringCompare = stringClean.split("").reverse().join("");

const stringClean = string.split(" ").join("").toLowerCase();
const stringCompare = [...stringClean].reverse().join("");
//[...limpio]: Utiliza el operador spread para convertir la cadena en un arreglo de caracteres.

console.log(stringClean);
console.log(stringCompare);

if (stringCompare === stringClean) {
  console.log(`"${string}" es una palabra palindroma`);
} else {
  console.log(`${string} no es una palabra palindroma`);
}

// /.../: Indica que es una expresión regular.
// \s: Coincide con cualquier carácter de espacio en blanco, incluidos:

//     Espacios ( )
//     Tabulaciones (\t)
//     Saltos de línea (\n, \r)

// +: Coincide con una o más repeticiones consecutivas del patrón anterior.
// g: Indica que la búsqueda es global, es decir, busca todas las coincidencias en lugar de detenerse en la primera.
