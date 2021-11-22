//Cilo for
var sergio = {
    nombre: 'Sergio',
    apellido: 'Maury',
    edad: 23,
    peso: 90
}

//simulamos el transcurso de 1 año y calculamos su peso al final
console.log(`Al inicio del año ${sergio.nombre} pesa ${sergio.peso} kg`) 

const incremento = 0.2
const aumentarPeso = (persona) =>{
    persona.peso += incremento
}

const baja = 0.2
const bajarPeso = (persona) =>{
    persona.peso -= baja
}

//Ciclo for
for (var i = 1; i<=365; i++) {
    var random = Math.random()
    if (random < 0.25){
        aumentarPeso(sergio)
    } else if (random < 0.5) {
        bajarPeso(sergio)
    } 
}

//.toFixed(x) lo que hace es dejarle x cantidad de decimales a un numero
console.log(`Al final del año ${sergio.nombre} pesa ${sergio.peso.toFixed(2)} kg`)