let inventario = [
    { nombre: "camisa", precio: 300, stock: 5 },
    { nombre: "pantalon", precio: 550, stock: 5 },
    { nombre: "zapatos", precio: 750, stock: 3 },
    { nombre: "sombrero", precio: 550, stock: 3 }
];

let bolsa = [];
let eleccion;

/*
1-n productos
n+1 agregar producto
n+2 ver total carrito
n+3 eliminar del carrito
n+4 salir
*/

do {
    eleccion = parseInt(prompt(menuPrincipal()));

    if (isNaN(eleccion) || eleccion < 1 || eleccion > inventario.length + 4) {
        alert("Selecciona una opción válida");
    } 
    else if (eleccion >= 1 && eleccion <= inventario.length) {
        comprarArticulo(inventario[eleccion - 1]);
    } 
    else if (eleccion === inventario.length + 1) {
        nuevoArticulo();
    } 
    else if (eleccion === inventario.length + 2) {
        verCarrito();
    } 
    else if (eleccion === inventario.length + 3) {
        quitarDelCarrito();
    }

} while (eleccion !== inventario.length + 4);

alert("Compra finalizada ");

/* ================= FUNCIONES ================= */

function menuPrincipal() {
    let texto = "=== TIENDA ===\n\n";

    for (let i = 0; i < inventario.length; i++) {
        let p = inventario[i];
        texto += `${i + 1}. ${p.nombre} - $${p.precio} | Stock: ${p.stock}\n`;
    }

    texto += `\n${inventario.length + 1}. Agregar producto nuevo`;
    texto += `\n${inventario.length + 2}. Ver carrito`;
    texto += `\n${inventario.length + 3}. Quitar producto del carrito`;
    texto += `\n${inventario.length + 4}. Salir\n`;

    return texto;
}

/* ----------- COMPRAR ----------- */
function comprarArticulo(item) {
    let cantidad = parseInt(prompt(`¿Cuántos "${item.nombre}" deseas comprar?`));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida");
        return;
    }

    if (cantidad > item.stock) {
        alert("No hay suficiente stock disponible");
        return;
    }

    item.stock -= cantidad;

    // acumular si ya existe
    let existe = bolsa.find(p => p.nombre === item.nombre);

    if (existe) {
        existe.cantidad += cantidad;
    } else {
        bolsa.push({
            nombre: item.nombre,
            precio: item.precio,
            cantidad: cantidad
        });
    }

    alert("Producto agregado al carrito");
}

/* ----------- VER CARRITO ----------- */
function verCarrito() {
    if (bolsa.length === 0) {
        alert("Carrito vacío");
        return;
    }

    let resumen = "=== CARRITO ===\n";
    let total = 0;

    bolsa.forEach((prod, i) => {
        let subtotal = prod.precio * prod.cantidad;
        resumen += `${i + 1}. ${prod.cantidad}x ${prod.nombre} = $${subtotal}\n`;
        total += subtotal;
    });

    resumen += `\nTOTAL: $${total}`;
    alert(resumen);
}

/* ----------- NUEVO PRODUCTO ----------- */
function nuevoArticulo() {
    let nombre = prompt("Nombre del producto:");
    let precio = parseInt(prompt("Precio:"));
    let stock = parseInt(prompt("Cantidad disponible:"));

    if (!nombre || nombre.trim() === "") {
        alert("Nombre inválido");
        return;
    }

    if (isNaN(precio) || isNaN(stock) || precio <= 0 || stock <= 0) {
        alert("Datos inválidos");
        return;
    }

    inventario.push({ nombre, precio, stock });
    alert("Producto agregado al inventario");
}

/* ----------- ELIMINAR DEL CARRITO ----------- */
function quitarDelCarrito() {
    if (bolsa.length === 0) {
        alert("No hay productos en el carrito");
        return;
    }

    let lista = "Selecciona producto a eliminar:\n";
    bolsa.forEach((p, i) => {
        lista += `${i + 1}. ${p.nombre} (${p.cantidad})\n`;
    });

    let opcion = parseInt(prompt(lista));

    if (isNaN(opcion) || opcion < 1 || opcion > bolsa.length) {
        alert("Opción inválida");
        return;
    }

    let eliminado = bolsa.splice(opcion - 1, 1)[0];

    // devolver stock
    let original = inventario.find(p => p.nombre === eliminado.nombre);
    if (original) {
        original.stock += eliminado.cantidad;
    }

    alert("Producto eliminado del carrito");
}