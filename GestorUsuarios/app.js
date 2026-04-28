let usuario = [];
const form = document.getElementById('formUsuario');
const tabla = document.getElementById('tablaUsuarios');
const inputArchivo = document.getElementById('importarJSON');
const btnDescargar = document.getElementById('descargarBtn');

function generarID() {
    return usuario.length > 0 ? Math.max(...usuario.map(u => u.id)) + 1 : 1;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value.trim();
    usuario.push({ 
        id: generarID(), 
        nombre, 
        email 
    });
    form.reset();
    mostrarUsuarios();
});


function mostrarUsuarios() {
    tabla.innerHTML = '';
    usuario.forEach((user, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${user.id}</td>
            <td contenteditable onblur="editarCampo(${index}, 'nombre',this.textContent)">${user.nombre}</td>
            <td contenteditable onblur="editarCampo(${index}, 'correo',this.textContent)">${user.email}</td>
            <td>
                <button onclick="eliminarUsuario(${user.id})">Eliminar</button>
            </td>
        `
        tabla.appendChild(fila);    
    });
}

function editarCampo(index, campo, valor) {
    usuario[index][campo] = valor.trim();
}

function eliminarUsuario(id) {
    const index = usuario.findIndex(user => user.id === id);
    if (index !== -1 && confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
        usuario.splice(index, 1);
        mostrarUsuarios();
    }
}

inputArchivo.addEventListener('change', function (e) {
    const archivo = e.target.files[0];
    const lector = new FileReader();

    lector.onload = function (e) {
        try {
            const datos = JSON.parse(e.target.result);
            if (Array.isArray(datos)) {
                usuario = datos;
                mostrarUsuarios();
            } else {
                alert('El archivo JSON no contiene un array de usuarios.');
            }
        } catch (error) {
            alert('Error al importar el archivo JSON: ' + error.message);
        }
    };

    lector.readAsText(archivo);
});


btnDescargar.addEventListener('click', function() {
    const contenidoJSON = JSON.stringify(usuario, null, 2);
    const blob = new Blob([contenidoJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.json';
    a.click();
    URL.revokeObjectURL(url);
});