/**
 * MOdelo de la ropa
 * 
 */ 
export class Ropa{
    constructor(imagenSrc,nombre, talla, diaComprado, descripcion, tipo, estacion){
        this.id=Date.now()
        this.imagenSrc=imagenSrc
        this.nombre = nombre
        this.talla = talla
        this.diaComprado = diaComprado
        this.descripcion = descripcion
        //this.enUso = enUso//al dar de alta se daria en false 
        this.tipo= tipo //calzado parte de arriba... el select
        this.estacion = estacion//invierno verano otoño primavera el checkbox
	}
}