// Contar palabras en una frase
//         Descripción: Cuenta el número de palabras en una frase dada.
//         Pistas: Divide la cadena usando split() y mide la longitud del array resultante.

let countWords = 0;
let string = "Soy Angel y aunque tengo miedo lo estoy haciendo";

string.split(" ").forEach((i) => {
  countWords++;
});

console.log(`"${string}" tiene ${countWords} palabras`);
