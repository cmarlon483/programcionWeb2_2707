
let alumno={
    id: 124231314252,
    nombre: "Marlon",
    primerApellido: "Cortes",
    segundoApellido: "M",
    edad: 20,
    titulado: false,
    egresado: {
        estado: false,
        semestreCursado: 6,
        materiasFaltantes: 3,
        turno: "Matutino",
        promedio: 9.01
    },
    domicilio:{
        calle: "Calle Condominio 55",
        numero: 8,
        colonia:"Ecatepec",
        cp: 54130,
        municipio: "Ecatepec ",
        estado: "Edo. de Mexico",
        continente: "America"
    },
    kinder:{
        nombre:"Kinder 1",
        actividades: function(){
            console.log("estudiar");
        },
        actividadRecurrente: function(){
            console.log("jugar");
        },
        datosProfesor:{
            nombre: "Juana",
            edad: 23,
            estudios: "Licenciatura en Educacion"
        }
    },
    primaria:{
        nombre:"Primaria 1",
        comer (comida){
            // return "comer " + comida;
            return `ahora esta comiendo ${comida}`;
        },
        mensaje (mensajeAlumno){
            return `${this.nombre} es la primaria y el alumno tien que ir a ${mensajeAlumno}`;
        }
    }
}

console.log(alumno.kinder.datosProfesor.nombre);
console.log(alumno.primaria.comer("Piña"));
console.log(alumno.primaria.mensaje("Direccion"));
