// Crear sistema que muestre las caracteristicas de 3 moviles
// Cada movil debe tener color, peso, resolucion de pantalla, res de camara y memoria ram
// Cada celular deber encender, apagar, reiniciar, tomar fotos y grabar


class movil {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
        // Cuando este apagado es false y cuando este encendido se vuelve true
    }
    botonEncendido(){
        if (this.encendido == false) {
            alert("movil encendido");
            this.encendido = true;
        } else{
            alert("movil apagado");
            this.encendido = false;
        }
        

    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando movil")
        } else{
            alert ("el movil esta apagado y no se puede reiniciar");

        }
    }
    tomarFotos(){
        alert(`foto hecha en una resolucion de ${this.resolucionDeCamara}`);
    }
    grabar(){
        alert(`video grabado con una resolucion de ${this.resolucionDeCamara}`);
    }
    infoMovil(){
        return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>`;
    }
}
movil1 = new movil("rojo","150g","5'","hd","1GB");
movil2 = new movil("negro","155g","5.4'","full hd","2GB");
movil3 = new movil("blanco","156g","5.9'","full hd","2GB");

movil1.botonEncendido();
movil1.tomarFotos();
movil1.grabar();
movil1.reiniciar();
movil1.botonEncendido();



document.write(`
	${movil1.infoMovil()} <br>
	${movil2.infoMovil()} <br>
	${movil3.infoMovil()} <br>
	`);