"use strict";
// Recursividad

const validarEdad = (msg)=>{
    let edad;
    try {
        if(msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "el numero no es correcto, intentelo de nuevo";
        if (edad > 18) document.write("eres mayor de edad");
        else document.write("eres menor de edad");
    } catch (e) {
        // Llamamos a la propia f() para validar si hay algun error
        validarEdad(e);
    }
}

validarEdad();
