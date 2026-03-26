let productos = [
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalon', precio: 550},
    {nombre: 'zapatos', precio: 750},
    {nombre: 'sombrero', precio: 550}
];

let carrito = [];

function mostrarMenu() {
    let menu = "Seleccione un producto para agregar al carrito:\n";
    
    for (let i = 0; i < productos.length; i++) {
        menu += (i + 1) + ".- " + productos[i].nombre + " $" + productos[i].precio + "\n";
    }
    
    menu += (productos.length + 1) + ".- Ver carrito total\n";
    menu += (productos.length + 2) + ".- Salir\n";
    
    return menu;
}

function agregarAlCarrito(indice) {
    carrito.push(productos[indice]);
    console.log(productos[indice].nombre + " agregado al carrito");
}

function mostrarCarritoTotal() {
    if(carrito.length);
    
    for (let producto of carrito) {
        console.log(producto.nombre + " $" + producto.precio);
        total += producto.precio;
    }
    
    console.log("Total a pagar: $" + total);
}

let opcion;

do {
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    // Validar opción
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 2) {
        console.log("Opción no válida, intenta de nuevo");
        
    } else if (opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
        
    } else if (opcion === productos.length + 1) {
        mostrarCarritoTotal();
    }

} while (opcion !== productos.length + 2);

console.log("Gracias por su compra :D");


//generar modulo para agregar productos al arreglo, menu extra donde se agregen menu y precio. al arreglo productos 