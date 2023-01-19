// Partiendo del Problema nº1. Añadir dos moviles mas de alta gama
// Estos deben ademas de tener las cualidades de los normales, estas:
// Grabar en camara super lenta, tiene reconocimiento facial y una camara extra.

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
class altaGama extends movil{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert(`grabando a camara lenta con una resolucion de ${this.resolucionDeCamaraExtra}`);

    }
    reconocimientoFacial(){

    }
    infoAltaGama(){
        return this.infoMovil() + `Resolución de Camara Extra: <b>${this.resolucionDeCamaraExtra}</b>`;
    }

}
movil1 = new altaGama("rojo","130g","5.2","4K","3GB","full hd");
movil2 = new altaGama("negro","142g","6","4K","4GB", "hd");


document.write(`
	${movil1.infoAltaGama()} <br><br>
	${movil2.infoAltaGama()} <br>
	`);