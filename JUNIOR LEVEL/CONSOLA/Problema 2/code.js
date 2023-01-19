// Un alumno debe trabajar 8h por dia durante 2 semanas entre las cuales tiene que:
// - Estudias 24h, 24h haver trabajos, 56 trabajar, 8h cosas de casa 
// Organizar las actividades diariamente
// El tiempo por tarea no debe superar las 4 horas

let tp = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (let i = 0; i < 14; i++) {
    if (i == 0){
        console.group("SEMANA 1");
    }
    console.groupCollapsed("Día " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 6){
        console.groupEnd();
        console.groupCollapsed("SEMANA 2");
    }
}
console.groupEnd();