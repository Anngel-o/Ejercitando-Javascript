// Contar vocales en una cadena
//Descripción: Dada una cadena, cuenta cuántas vocales contiene (a, e, i, o, u).
//Pistas: Verifica cada carácter usando un bucle y un conjunto de vocales.

function countVowel(string) {
  let count = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  string.split("").map((letter) => {
    if (vowels.has(letter)) {
      count++;
    }
  });
  console.log("La palabra " + string + " contiene " + count + " vocales");
}

countVowel("Hola");
