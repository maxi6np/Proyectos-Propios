// Crear un sistema para obtener:
// - Cuantos alumnos van a cursar el ultimo semestre
// - Cuantos alumnos se graduan y cuantos no
// Mostrarlo ordenadamente en un sitio web

const boton = document.getElementById("getInfo");

const mostrarInfo = async ()=>{
   let aprobados = document.querySelector(".num-aprobados");
   let suspensos = document.querySelector(".num-suspensos");
   try {
      let resultado = await axios ("notas.txt");
      aprobados.innerHTML = resultado.data.aprobados;
      suspensos.innerHTML = resultado.data.suspensos;
   } catch (e) {
      aprobados.innerHTML = "La API de aprobados falló";
      suspensos.innerHTML = "La API de suspensos falló";
   }
};

boton.addEventListener("click",mostrarInfo);