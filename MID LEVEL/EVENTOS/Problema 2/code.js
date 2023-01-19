// Los datos del problema anterior fueron recibidos
// Ahora hay que crear un sistema que muestre la informacion y se pueda asginar el día del examen
// - La interfaz debe ser agradable y atractiva
// - Debe contener todos los datos de manera estructurada
// - El profesor puede seleccionar en cual de las 2 semanas se examina el usuario
// - Si el profesor confirma, los datos se deben actualizar y reemplazar las semanas en caso de correccion

alumnos = [{
    nombre:"Maximo Novoa",
    email:"maximo@novoa.com",
    materia:"Segunda Lengua Extranjera: Francés"
},{
    nombre:"Miguel Echevarria",
    email:"miguel@echeva.com",
    materia:"Historia de España"
},{
    nombre:"Pelayo Cerro",
    email:"pelayo@cerro.com",
    materia:"Lengua Castellana y Literatura"
},{
    nombre:"Marcos Gonzalez",
    email:"marcos@gonza.com",
    materia:"Filosofía"
},{
    nombre:"Jose Antonio",
    email:"jose@antonio.com",
    materia:"Recreo"
}];

const boton = document.querySelector(".btn-confirm");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="SEMANA 1">SEMANA 1</option>
            <option value="SEMANA 2">SEMANA 2</option>
        </select>
    </div>`
    contenedor.innerHTML += htmlCode;
}


boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar estas semanas?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanaElegida[elemento].value;
        }
    }
});