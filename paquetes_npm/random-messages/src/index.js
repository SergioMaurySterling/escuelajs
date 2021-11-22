const messages = [
    "Sergio",
    "Pedro",
    "Javier",
    "Catalina",
    "Teffy"
];

//me entrega de forma aleatoria 
const randomMsg = ()=>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMsg};