// Crear minisistema que permita registrar los alumnos presentes y ausentes
// Pasados los 30 dias mostrar la situacion final de los alumnos (numero total de presentes y ausentes)
// Se puede tener un maximo de 10% de ausencias por semestre. Si tienes más el alumno ha suspendido

let cantidad = prompt("¿cuantos alumnos hay en total?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales [i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const asistencias = (nombre,p)=>{
    let presente = prompt(nombre);
    if(presente == "p" || presente =="P"){
        alumnosTotales[p][1]++;
    }
}
for (let i = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
        asistencias(alumnosTotales[alumno][0],alumno);
    }
    
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
	if (30 - alumnosTotales[alumno][1] > 18) {
	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
	resultado+= "<br><br>"
	}
	document.write(resultado)
}