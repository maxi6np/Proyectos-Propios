// Crear una interfaz para introducir las notas de los examenes
// Asegurarse que no haya errores
// Se debe promediar la nota del profesor con otras dos de trabajos anteriores
// Si el promedio es mayor a 7/10, aprobó la materia

const boton = document.getElementById("enviar-nota");

boton.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado = verificarAprobacion(8,4,mensaje);
        mensaje = definirMensaje(resultado[1]);
    } catch (e){
        resultado = "Por lo que veo eres un gracioso";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado[0],mensaje);
});

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1 : resultado ="No puedes ser tan hijodeputa";
        break;
        case 2 : resultado ="Eres malisimo para mi materia";
        break;
        case 3 : resultado ="No sabes casi nada";
        break;
        case 4 : resultado ="Muy mal";
        break;
        case 5 : resultado ="Mal";
        break;
        case 6 : resultado ="Regular";
        break;
        case 7 : resultado ="Bien, pero puedes mejorar";
        break;
        case 8 : resultado ="¡Muy bien!";
        break;
        case 9 : resultado ="¡Excelente!";
        break;
        case 10 : resultado ="¡Insuperable!";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    let promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7){
        return "<span class='green'>APROBADO</span>";
    } else {
        return "<span class='red'>DESAPROBADO</span>";
    }
}

const abrirModal=(res,mnsj)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + mnsj;
    let modal = document.querySelector(".modal-back");
    modal.style.animation = "aparecer 1s forwards";
    modal.style.display = "flex";
}