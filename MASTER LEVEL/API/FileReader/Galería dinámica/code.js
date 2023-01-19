"use strict";

const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e)=>{
    leerArchivo(archivo.files)
})

const leerArchivo = arch =>{
    for (let i = 0; i < arch.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(arch[i]);
        reader.addEventListener("load",(e)=>{
            let img = `<img src = '${e.currentTarget.result}'>`;
            document.querySelector(".resultado").innerHTML += img;
        })
        
    }
}