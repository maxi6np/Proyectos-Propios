// // Sobreescribir __proto__
// class Objeto{
//     constructor(){};
//     hablar(){
//         console.log("dentro");
//     }
// }

// const objeto = new Objeto();

// objeto.hablar = ()=>{
//     console.log("fuera");
// };

// let arr = [];
// arr.__proto__ = objeto;
// // __proto__ hereda absolutamente todo
// // Siempre por jerarquía desde fuera hacia dentro del prototipo
// arr.__proto__.__proto__.hablar();
// // Return: dentro
// arr.__proto__.hablar();
// // Return: fuera




// // Sobreescribir método
// class Objeto{
//     constructor(){};
//     hablar(){
//         console.log("interior");
//     }
// }

// const objeto = new Objeto();

// objeto.__proto__.hablar = ()=>{
//     console.log("exterior");
// };
// // Estamos sustiuyendo el metodo hablar para que no haya posibilidad de heredacion
// console.log(objeto);
// // Return:exterior