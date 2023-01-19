"use strict";

// // Parametros por defecto
// const suma = (a = 0,b = 0)=>{
//     console.log(a+b);
//  };

// suma (22);
// // suma(a,b); si ninguno de estos parametros se define es igual a 0
// // Return:22





// // Parametros rest (spread operator)
// // El parametro rest va a ser igual a un array
// // Rest siempre va como ultimo parametro. En este caso, "...num"
// const suma = (frase,...num)=>{
//     let resultado = 0;
//     for (let i = 0; i < num.length; i++) {
//         resultado += num[i];
//     }

//     console.log(`${frase} y ${resultado}`);
//  };

// suma ("maximo",12,55,66,22);
// // Return: maximo y 155






// // Parametro rest como argumento

// const sumar = (num1,num2,num3)=>{
//     console.log(num1 + num2 + num3);
// }

// let arr= [3,6,1];

// sumar(...arr);
