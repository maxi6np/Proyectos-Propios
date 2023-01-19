// Crear una calculadora que nos permita sumar, restar, multiplicar y dividir

let op = prompt(`¿Que operacion desea ejecutar?
1: sumar; 2: restar; 3: dividir; 4: multiplicar`);

if (op == 1) {
	let num1 = prompt("primer número para sumar");
	let num2 = prompt("segundo número para sumar");
	resultado = num1 + num2;
	alert(`tu resultado es ${resultado}`);
} else if (op == 2) {
	let num1 = prompt("primer número para restar");
	let num2 = prompt("segundo número para restar");
	resultado = num1 - num2;
	alert(`tu resultado es ${resultado}`);
} else if (op == 3) {
	let num1 = prompt("primer número para dividir");
	let num2 = prompt("segundo número para dividir");
	resultado = num1 / num2;
	alert(`tu resultado es ${resultado}`);
} else if (op == 4) {
	let num1 = prompt("primer número para multiplicar");
	let num2 = prompt("segundo número para multiplicar");
	resultado = num1 * num2;
	alert(`tu resultado es ${resultado}`);
} else {
    alert("no vas a consenguir trolear al juego, estupido. Por favor, intentelo de nuevo");
}
