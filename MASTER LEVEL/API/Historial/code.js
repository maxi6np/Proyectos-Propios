"use strict";

// // Go()

// history.go(-1);
// // Vuelve atrás
// history.go(0);
// // Recarga la página
// history.go(1);
// // Va hacia adelante




// PushState() y replaceState()
console.log(location.href);
history.pushState({nombre:"maxi"},"","?nuevo");
history.pushState({nombre:"novoa"},"","?nuevo2");
history.pushState({nombre:"perez"},"","?nuevo3");


addEventListener("popstate",(e)=>{
    console.log(e.state);
})
// Muestra el state de las nuevas paginas
// Ejem: {nombre:"maxi"}