"use strict";
// Texturizador

const zona = document.querySelector(".zona");
const texturas = document.querySelector(".texturas");

zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.png)`; 
})


for (let i = 1; i < texturas.children.length + 1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=> addTextura(i,e))
}

const addTextura = (n,e)=>{
    e.dataTransfer.setData("textura",n);
}