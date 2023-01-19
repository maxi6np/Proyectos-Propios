"use strict";

// const fecha = new Date();

// console.log(fecha.getDate());
// console.log(fecha.getFullYear());
// console.log(fecha.getMonth());



// Creacion de reloj


const ceros = num =>{
    // Se utiliza toString ya que "n.length" no devuelve la cantidad de caracteres que tiene, devuelve otro dato
    if (num.toString().length < 2) return "0".concat(num);
    // No hace falta poner "else", ya que si el if es verdad, su "return" termina la funcion. Si es falso se ejecuta lo siguiente
    return num;
}

const actualizarHora = ()=>{
    const time = new Date();
    let horas = ceros(time.getHours());
    let minutos = ceros(time.getMinutes());
    let segundos = ceros(time.getSeconds());

    document.querySelector(".hora").textContent = horas;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;
}

actualizarHora();
// Primero se llama a la f() para que se ejecute recién se actualiza la pagina y no espere 1seg en blanco como dice el setInterval().
setInterval(actualizarHora,1000);

