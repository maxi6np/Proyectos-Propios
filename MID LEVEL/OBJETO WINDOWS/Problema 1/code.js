// Crear un sistema que muestre los suficientes datos como para conocer el sitio web

let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;
let resultado = `
La URL completa es ${href} <br>
El hostname es ${hostname}<br>
El pathname es ${pathname}<br>
El protocol es ${protocol}<br>`;

document.write(resultado);

// Pegar en la consola de cualquier pagina web y sale