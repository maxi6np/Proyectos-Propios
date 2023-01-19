"use strict";
// // 1
// const objeto = {};

// // Writeable no permite reescribir la propiedad "value";
// Object.defineProperty(objeto,'apellido',{value:"novoa", writable:false});

// objeto.apellido = "perez";

// console.log(objeto.apellido);
// Return: novoa


// const objeto = {nombre :"maximo"};

// Object.preventExtensions(objeto);
// // No permite añadir más propiedades/extensiones al objeto

// objeto.apellido = "novoa";

// console.log(objeto.apellido);
// // Return: undefinded




// // 2
// const variable = {
//     nombre:"maximo"
// }

// delete variable.nombre;
// // Delete solo elimina propiedades de objetos.

// console.log(variable.nombre);
// // return: undefinded




// // 3
function saludar(){
    this.nombre = "maximo";
    this.saludar = function(){
        console.log(`Hola ${this.nombre}`);
    }
}

obj = new saludar();
// En modo estricto el "new" no existe y se tiene que quitar
// Por otro lado, "this" sería igual a "undefined" y daría error
obj.saludar();