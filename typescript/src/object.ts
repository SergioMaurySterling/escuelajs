//type: object
let user: object;
user = {}; //Object

user = {
    id:1,
    username: 'paparazzi',
    firstName: 'Sergio',
    isPro: true
}

console.log('user', user);
//console.log(`user.username: ${user.username}`) ERROR


//Object vs object(clase de JS vs tipo ts)
const myObj = {
    id:1,
    username: 'paparazzi',
    firstName: 'Sergio',
    isPro: true
}
//arroja true or false
const isInstance = myObj instanceof Object;
console.log('isInstance', isInstance) //clase object de js
console.log(`myObj.username: ${myObj.username}`)
