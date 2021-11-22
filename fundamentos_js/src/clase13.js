//Cilo for
var sergio = {
    nombre: 'Sergio',
    apellido: 'Maury',
    edad: 23,
    peso: 90
}

const goal = 87
var days = 1
const bajarPeso = (persona, random) => persona.peso -= random

while (sergio.peso > goal) {
    var random = Math.random().toFixed(2)
    bajarPeso(sergio, random)
    days ++
}

console.log(`Felicitaciones ${sergio.nombre}, lograste bajar a ${goal} kilos en ${days} dias`)
