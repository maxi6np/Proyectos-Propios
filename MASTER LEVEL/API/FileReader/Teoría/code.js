"use strict";

const archivo = document.getElementById("archivo");
// El evento "change" detecta los cambios. Ejem: cuando los inputs cambian la info


// // readAsText()

// un archivo de texto
// archivo.addEventListener("change",(e)=>{
//     leerArchivo(archivo.files[0])
// })
// 
// const leerArchivo = arch =>{
//     const reader = new FileReader();
//     reader.readAsText(arch);
//     reader.addEventListener("load",(e)=>{
//         console.log(JSON.parse(e.currentTarget.result))
//     })
    
// };




//varios archivos de texto
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files)
})

const leerArchivo = arch =>{
    for (let i = 0; i < arch.length; i++) {
        const reader = new FileReader();
            reader.readAsText(arch[i]);
            reader.addEventListener("load",(e)=>{
            console.log(JSON.parse(e.currentTarget.result))
    })
    }
};





// // readAsDataURL() lee archivos multimedia

// archivo.addEventListener("change",(e)=>{
//     leerArchivo(archivo.files)
// })
    
// const leerArchivo = arch =>{
//     for (let i = 0; i < arch.length; i++) {
//         const reader = new FileReader();
//             reader.readAsDataURL(arch[i]);
//             reader.addEventListener("load",(e)=>{
//                 let img = `<img src = '${e.currentTarget.result}'>`;
//                 document.querySelector(".resultado").innerHTML += img;
//             })
//     }    
// };