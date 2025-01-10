// Generar una tabla de multiplicar
//         Descripción: Dado un número, genera su tabla de multiplicar del 1 al 10.
//         Pistas: Usa un bucle for.

// const prompt = require("prompt-sync")({ sigint: true });
// let number = parseInt(prompt("Escribe un numero: "));
let number = 9;

function tableMultiplier(number) {
  for (let i = 1; i <= 10; i++) {
    let response = i * number;
    console.log(`${i} x ${number} = ${response}`);
  }
}

tableMultiplier(number);
