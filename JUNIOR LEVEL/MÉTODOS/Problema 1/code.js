// Crear una funcion que al pasarle como parametro la materia nos devuelva:
// -El profesor asignado
// -El nombre de todos los alumnos
// Crear una funcion que nos diga en cuantas clases esta un alumno
// Nombrar las clases en las que esta ese alumno y los profesores de cada una


// El primer nombre del array pertenece al profesor
const materias = {
    fisica: ["Perez","pedro","pepito","maxi","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","maxi","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","maxi","maria"]
}

const obtInfo = (materia)=>{
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];

    } else {
        return materias;
    }
}
const mostrarInfo = (materia)=>{
    let informacion = obtInfo(materia);
    if(informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b> ${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue"> ${alumnos}</b><br><br>
		`);
    }
}
const cantidadDeClases = (alumno)=>{
	let informacion = obtInfo();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
	return `<b style='color:blue'>
	${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
	<br><br>
	`;
}


mostrarInfo("fisica");
mostrarInfo("quimica");
mostrarInfo("programacion");
mostrarInfo("logica");

document.write(cantidadDeClases("maxi"))
document.write(cantidadDeClases("pedro"))