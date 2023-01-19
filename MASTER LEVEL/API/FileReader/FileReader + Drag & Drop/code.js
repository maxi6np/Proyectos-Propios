"use strict";

const zona = document.querySelector(".zona-arrastre");
const resultado = document.querySelector(".resultado");
const barraCarga = document.querySelector(".barra-de-carga");

zona.addEventListener("dragover", (e)=>{
    e.preventDefault();
    changeStyle(e.target,"#678");
})

zona.addEventListener("drop", (e)=>{
    e.preventDefault();
    changeStyle(e.target,"rgb(129, 0, 0)");
    cargarArchivo(e.dataTransfer.files[0]);
})

zona.addEventListener("dragleave", (e)=>{
    e.preventDefault();
    changeStyle(e.target,"rgb(129, 0, 0)");
})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px solid ${color}`;
}



// // Así carga un archivo de texto
// const cargarArchivo = arch =>{
//     const reader = new FileReader();
//     reader.readAsText(arch);
//     reader.addEventListener("load", (e)=>{
//         resultado.textContent = e.currentTarget.result;
//     })
// }




// // Así carga una imagen
// const cargarArchivo = arch =>{
//     const reader = new FileReader();
//     reader.readAsDataURL(arch);
//     reader.addEventListener("load", (e)=>{
//         let url = URL.createObjectURL(arch);
//         let img = document.createElement("IMG");
//         img.setAttribute("src",url);
//         resultado.appendChild(img);
//     })
// }



// Así carga un vídeo con barra de progreso
const cargarArchivo = arch =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(arch);
    reader.addEventListener("progress",(e)=>{
        let carga = Math.round((e.loaded / arch.size)*100);
        zona.textContent = `${carga}%`;
        barraCarga.style.width = `${carga}%`;
        barraCarga.style.padding = "75px 20px";
    });
    reader.addEventListener("loadend",()=>{
        changeStyle(zona,"2e7");
        barraCarga.style.background = "2e7";
        zona.style.border = "4px solid 2e7";
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "¡CARGA COMPLETA!";
        },500)
    });
    reader.addEventListener("load", (e)=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:"video/mp4"});
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src",url);
        resultado.appendChild(img);
    });
};