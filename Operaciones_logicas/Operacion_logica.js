let a = prompt("Introduce un numero booleano");
let b = prompt("Introduce el segundo numero booleano");
let resultadoA = a === "1";
let resultadoB = b === "1";

console.log("La compuerta AND da como resultado: " + (resultadoA&&resultadoB));
console.log("La compuerta OR da como resultado: " + (resultadoA||resultadoB));