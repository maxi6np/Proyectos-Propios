// Roberto = 1.5€
// Pedro = 1.7€
// Maxi = 3€

// Precios de los helados:
// Naranja: 0.6€
// Crema: 1€
// Fresa: 1.6€
// Arcoiris: 1.7€
// Coco: 1.8€
// Oreo: 2.9€
// Vainilla: 2.9€

// OBJETIVO
// - Pedirles que ingresen el monto que tienen y mostrarles el más caro que pueden comprar
// - Si hay 2 o mas con el mismo precio, mostrar ambos
// - Maxi quiere saber cuanto es el vuelto


// MÉTODO Nª1

dineroMaxi = prompt("cuanto dinero tienes Maxi?");
dineroPedro = prompt("cuanto dinero tienes Pedro?");
dineroRoberto = prompt("cuanto dinero tienes Roberto?");

if (dineroMaxi >= 0.6 && dineroMaxi <1){
    alert("Maxi, puedes comprar el helado de naranja");
    alert("la vuelta es de " + (dineroMaxi -0.6));
}
else if (dineroMaxi >= 1 && dineroMaxi < 1.6) {
	alert("Maxi; comprate el helado de crema");
	alert("y te sobran" + (dineroMaxi - 1));
}
else if (dineroMaxi >= 1.6 && dineroMaxi < 1.7) {
	alert("Maxi; comprate el helado de fresa");
	alert("y te sobran" + (dineroMaxi - 1.6));
}
else if (dineroMaxi >= 1.7 && dineroMaxi < 1.8) {
	alert("Maxi; comprate el helado de arcoiris");
	alert("y te sobran" + (dineroMaxi - 1.7));
}
else if (dineroMaxi >= 1.8 && dineroMaxi < 2.9) {
	alert("Maxi; comprate el helado de coco");
	alert("y te sobran" + (dineroMaxi - 1.8));
}

else if (dineroMaxi >= 2.9) {
    alert("Maxi, comprate helado con oreo o el vainilla");
	alert("y te sobran" + (dineroMaxi - 2.9));

} else {
	alert("lo siento Maxi, pobre de mierda, no te alcanza para ningun helado");
}





if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("roberto, comprate el helado de naranja");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("roberto, comprate el helado de fresa");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("roberto, comprate el helado de arcoiris");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("roberto, comprate el helado de coco");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate helado con oreo o el vainilla");

} else {
	alert("lo siento roberto, pobre de mierda, no te alcanza para ningun helado");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro; comprate el helado de naranja");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro; comprate el helado de fresa");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro; comprate el helado de arcoiris");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro; comprate el helado de coco");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate helado con oreo o el vainilla");

} else {
	alert("lo siento pedro, pobre de mierda, no te alcanza para ningun helado");
}

// MÉTODO Nº2

const definirCompra = (n)=>{
	let dinero = prompt(`Dinero de ${n}`);
	if (dinero >= 0.6 && dinero <1) return (`${n}: helado de naranja`);
	if (dinero >= 1 && dinero <1.6) return (`${n}: helado de crema`);
	if (dinero >= 1.6 && dinero <1.7) return (`${n}: helado de fresa`);
	if (dinero >= 1.7 && dinero <1.8) return (`${n}: helado de arcoiris`);
	if (dinero >= 1.8 && dinero <2.9) return (`${n}: helado de coco`);
	else return (`${n}:No te alcanza para ningun helado, pobre de mierda`);
}

console.log(definirCompra("Maxi"));
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));