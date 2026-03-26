let nombre =[];
function agregarNombre(){
    let nombre = prompt("Ingresa el nombre a agregar");
    if(nombre){
        nombre.push(nombre);
        alert(`!nombre ${nombre} - Se agrego de manera exitosa`);
     } else {
            alert("El nombre no puede estar vacio")
        }
}
function mostrarNombre{
    if (nombre.length==0){
        alert("No hay nombres en el arreglo,por que esta vacio")
    } else {

    let mensaje= "Nombres almacenados \n";
    nombre.forEach(nombre, indice  => {
        mensaje += `${indice+1} .-  $`
        
    });
    }
}
function mostrarMenu(){
     let opcion;
    
opcion = prompt(`
    OPCIONES DISPONIBLES:
    1. Agregar un nombre
    2. Mostrar los nombres
    3. Salir
    ELIGE UNA OPCIÓN:
    `);

    switch(opcion){
        case "1":
            agregarNombre();
            break;
        case "2":
            mostrarNombres();
            break;
        case "3":
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción del 1 al 3.");
            break;
    }
}

