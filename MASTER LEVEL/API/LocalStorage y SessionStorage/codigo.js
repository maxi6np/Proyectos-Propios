"use strict";


// // LocalStorage
// localStorage.setItem("nombre","maximo");

// console.log(localStorage.getItem("nombre"))

// console.log(localStorage);




// // SessionStorage
// sessionStorage.setItem("apellido","novoa");

// console.log(localStorage);

// setTimeout(()=>{
//     let apellido = sessionStorage.removeItem("apellido")
// }, 2000);






// Definir un idioma

const modal = document.querySelector(".modal-overlay");

const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","Inglés");
        cerrarModal();
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","Español");
        cerrarModal();
    })
};

const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=>{
        modal.style.display = "none"
    },1000)
}

const idioma = localStorage.getItem("idioma");

if (idioma == null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}

// Para camniar de idioma:
// localStorage.clear() y despues actualizar la página 