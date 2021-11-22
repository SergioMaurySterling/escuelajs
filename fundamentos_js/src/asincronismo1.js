
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
    //la funcion fn es opcional
    //funciones como parametros
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        //se consulta si nos pasaron la funcion fn como paremetro, si la pasada
        //sera true, por el contrario sera false 
        if(fn){
            fn(this.nombre, this.apellido, false)
        }
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

    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} y soy desarrollador`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mira, no sabia que eras desarrollador/a`)
    }
}


//la funcion se ejecutara cuando se cree una persona
//palabra reservada 'new' para crear objetos
//a este objeto se le asigna como prototipo el que tenga la funcion
var sergio = new Persona('Sergio','Maury', 1.81)
var pedro = new Persona('Pedro', 'Gonzales', 1.78)
var alberto = new Desarrollador('Alberto', 'Rodriguez', 1.92)

sergio.saludar()
pedro.saludar(responderSaludo) 
alberto.saludar(responderSaludo)
