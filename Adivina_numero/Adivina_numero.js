let numeroUsuario= false;
let numeroMaquina= Math.floor(Math.random()*10)+1;
let vidas= 3; 

while(vidas>0){
    let intento= parseInt(prompt("Adivina el numero (1 al 10). Te quedan: " 
        + vidas + " vidas: "))

if(intento==numeroMaquina){
    numeroUsuario=true;
}else{
    vidas--;
    if(vidas>0){
        alert("Incorrecto. Intenta otra vez");
    }
    }
}

if(numeroUsuario){
    alert ("¡Ganasate!, el numero era : " + numeroMaquina);
}else{
    alert ("Fallaste, el numero era : " + numeroMaquina);
}