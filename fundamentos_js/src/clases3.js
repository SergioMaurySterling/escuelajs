
//clases en js
class Persona {
    //tiene un metodo constructor
    constructor (nombre,apellido,altura){
        //this hace referencia al objeto que se acaba de construir
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        //implicitamente js retorna this
    }
    //no hace falta la palabra function
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura>1.80
    }
}

//clase desarrollador hereda de persona
class Desarrollador extends Persona {
    constructor (nombre,apellido, altura){
        //debemos llamar a la clase padre
        super(nombre, apellido, altura)
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} y soy desarrollador`)
    }
}


//la funcion se ejecutara cuando se cree una persona
//palabra reservada 'new' para crear objetos
//a este objeto se le asigna como prototipo el que tenga la funcion
var sergio = new Persona('Sergio','Maury', 1.81)
var pedro = new Persona('Pedro', 'Gonzales', 1.78)
var alberto = new Persona('Alberto', 'Rodriguez', 1.92)

sergio.saludar()
pedro.saludar()
alberto.saludar()
