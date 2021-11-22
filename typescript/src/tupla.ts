//Una tupla en TypeScript es un array de elementos que están tipados. 
//De esta manera cada vez que haya que insertar un 
//elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.

//para poder declarar una variable con el mismo
//nombre en un mismo archivo
//los tipos deben ser diferentes para cada pos
export{};
//[1,"user name"]
let user: [number,string];
user = [1,'sams']

console.log('user',user);
console.log('username', user[1]);
console.log('username', user[1].length);
console.log('id', user[0]);
console.log('id', user[0].toExponential);

//tuplas con varios varoles
//id,username,isPro
let userInfo:[number,string,boolean];
userInfo = [2,'paparazzi',true];
console.log('userInfo', userInfo)

//arreglo de tuplas
let array: [number,string][] = [];
array.push([1,'sergio']);
array.push([2,'sergo']);
array.push([3,'sgio']);
console.log('array', array);

//uso de funciones Array
//sergio -> sergio001
//concatenar strings
array[2][1] = array[2][1].concat('001');
console.log(array)
