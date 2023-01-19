"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");


// // Eventos del objeto

// circulo.addEventListener("dragstart", ()=>console.log(1));
// circulo.addEventListener("drag", ()=>console.log(2));
// circulo.addEventListener("dragend", ()=>console.log(3));





// // Eventos de zona

// rectangulo.addEventListener("dragenter", ()=>console.log(1));
// rectangulo.addEventListener("dragover", (e)=>{
//     e.preventDefault();
//     console.log(2);
// });
// rectangulo.addEventListener("drop", ()=>console.log(3));
// rectangulo.addEventListener("dragleave", ()=>console.log(4));
// // "dragover" y "drop" están relacionados.
// // Por defecto, drop no esta habilitado, a menos que drogover se lo permita mediante preventDefault().






// // Propiedad dataTransfer
// // Interactuan el objeto que se arrastra y el contenedor del objeto arrastrado

// circulo.addEventListener("dragstart", (e)=>{
//     e.dataTransfer.setData("text-plain",e.target.className);
//     console.log(e.dataTransfer.getData("text-plain"))
// });

// rectangulo.addEventListener("dragenter", ()=>console.log(1));
// rectangulo.addEventListener("dragover", (e)=>{
//     e.preventDefault();
//     console.log(2);
// });
// rectangulo.addEventListener("drop", (e)=>{
//     console.log(e.dataTransfer.getData("text-plain"))
// });
// rectangulo.addEventListener("dragleave", ()=>console.log(4));
