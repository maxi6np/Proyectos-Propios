// Crear un formulario que permita enviar los datos de un alumno que ha suspendido alguna materia

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar"); 
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = verificarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }

});

const verificarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    } else if (
    email.value.length < 5 ||
    email.value.length > 40 ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El emial es invalido";
        return error;
    } else if (materia.value < 4 || materia.value > 40){
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    }
    error[0] = false;
    return error;
    // No hace falta poner el "else" ya que el "return" termina la funcion
}