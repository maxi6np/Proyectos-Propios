// Las notas del examen de recuperacion estan almacenadas en un servidor especial
// Crear un sistema que almacene toda la info de las materias y las muestre en pantalla

const materiasHTML = document.querySelector(".materias");

const materias = [{
    nombre:"Física",
    nota: 7
},{
    nombre:"Matemáticas",
    nota: 8
},{
    nombre:"Cálculo",
    nota: 5
},{
    nombre:"Bases de datos",
    nota: 5
},{
    nombre:"Programación",
    nota: 10
}];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject ("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*1400);
    })
};

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria[i];
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materias[i].nombre}</div>
            <div class="nota">${materias[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();