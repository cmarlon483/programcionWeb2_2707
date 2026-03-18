let frutas = ["Manzana", "Plátano", "Naranja", "Uva", "Mango"];

let elegidas = [];

let continuar = true;

while (continuar) {

    let lista = "Frutas disponibles:\n";
    for (let i = 0; i < frutas.length; i++) {
        lista += (i + 1) + ". " + frutas[i] + "\n";
    }

    let opcion = prompt(lista + "\nElige una fruta por número:");

    let index = parseInt(opcion) - 1;

    if (index >= 0 && index < frutas.length) {
        elegidas.push(frutas[index]);
        alert("Agregaste: " + frutas[index]);
    } else {
        alert("Opción inválida");
    }

    let respuesta = prompt("¿Quieres elegir otra fruta? (si/no)").toLowerCase();

    if (respuesta !== "si") {
        continuar = false;
    }
}

alert("Frutas elegidas: " + elegidas.join(", "));