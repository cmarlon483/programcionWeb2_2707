const inputNumero = document.querySelector('#numeroFilas');
const botonGenerar = document.querySelector('#btnGenerar');
const lista = document.querySelector('#listaDinamica');

botonGenerar.addEventListener('click', () => {
    const cantidad = parseInt(inputNumero.value);

    // Validación temprana (Early Return) para evitar anidar código
    if (isNaN(cantidad) || cantidad <= 0) {
        return alert('Por favor, ingresa un número válido mayor a 0');
    }

    // 1. Creamos un array con la longitud deseada
    // 2. Lo llenamos con el HTML de cada fila
    // 3. Lo unimos todo en un solo string
    const filasHTML = Array.from({ length: cantidad }, (_, i) => {
        return `<li>Fila generada número ${i + 1}</li>`;
    }).join('');

    // Insertamos todo de un solo golpe (mejor rendimiento)
    lista.innerHTML = filasHTML;
});