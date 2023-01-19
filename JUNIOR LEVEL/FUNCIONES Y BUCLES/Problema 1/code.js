// Dan una fiesta en la que dejan pasar solo a los mayores de edad.
// La primera persona que entre despues de las 2AM, no paga

let gratis = false;
// variable que indica que hay que pagar entrada de momento
 
const validarCliente = (tiempo)=>{
    let edad = prompt("¿Que edad tienes?");
    if (edad > 18){
        if (tiempo >= 2 && time < 7 && gratis == false){
            alert("puedes pasar gratis porque eres la primera persona despues de las 2AM");
            gratis = true;
        } else{
            alert(`son las ${tiempo}:00HS y puedes pasar pero tienes que pagar la entrada`);
        }
    } else {
        alert("mira enano eres menor de edad y no puedes pasar, MAQUINOLA");
    }

}
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);