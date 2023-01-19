"use strict";

// // Sin clausuras

// const cambiarTamaño = tamaño =>{
//     document.querySelector(".text").style.fontSize = `${tamaño}px`;
// };

// document.querySelector(".t12").addEventListener("click",()=> cambiarTamaño(12));
// document.querySelector(".t14").addEventListener("click",()=> cambiarTamaño(14));
// document.querySelector(".t16").addEventListener("click",()=> cambiarTamaño(16));




// // Con clausuras

// const cambiarTamaño = tamaño =>{
//     return ()=>{
//         document.querySelector(".text").style.fontSize = `${tamaño}px`;
//     }
// };

// px12 = cambiarTamaño(12);
// px14 = cambiarTamaño(14);
// px16 = cambiarTamaño(16);

// document.querySelector(".t12").addEventListener("click",px12);
// document.querySelector(".t14").addEventListener("click",px14);
// document.querySelector(".t16").addEventListener("click",px16);
