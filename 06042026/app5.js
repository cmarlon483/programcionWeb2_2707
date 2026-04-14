const boton = document.querySelector("#botonID1");
const parrafo = document.querySelector("#parrafoID1");

const h1 = document.querySelector("#parrafoID1");


boton.addEventListener("click", () => {
    h1.textContent = "Nuevo titulo";
    h1.style.color = "green";
    h1.style.fontSize = "40px";
    h1.style.textTransform = "uppercase";
    h1.style.textAlign = "center";
    h1.style.backgroundColor = "yellow";
    h1.style.padding = "20px";
    h1.style.border = "2px solid black";
    h1.style.borderRadius = "10px";
    h1.style.borderColor = "2px solid black";
    h1.style.width = "400px";
    h1.style.margin = "20px auto";
});
