//herencia prototipal
//podemos crear prototipos hijos
function heredaDe(prototipoHijo, prototipoPadre){
    //debemos decirle al prototipo hijo quien sera su prototipo padre
    //funcion vacia y anonima
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

//clases: prototipos en js
//prototipo de persona que saludara y dira su nombre

//constructor, se ejecutara cuando creemos una persona
//retornara el objeto que se contruya
function Persona(nombre,apellido,altura){
    //this hace referencia al objeto que se acaba de construir
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //implicitamente js retorna this
}

//debemos usar function y no arrow function
Persona.prototype.saludar = function (){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto`)
}

//las arrow functions cambian el this de la funcion, lo apuntan a window o al this
//afuera de la funcion
Persona.prototype.soyAlto = function () {
    return this.altura>1.80
}

function Desarrollador(nombre,apellido){
    this.nombre
    this.nombre = nombre
    this.apellido = apellido
}

//Llamamos a la funcion hereda de:
//llamarlo despues de la funcion
heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} y soy desarrollador`)
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
