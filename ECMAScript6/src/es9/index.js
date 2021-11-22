//OPERADOR DE REPOSO, EXTRAER PROPIEDADES DE UB OJETO QUE AUN NO SE
//HA CONSTRUIDO, para separar los elementos
const obj = {
    name: 'sergio',
    age: 23,
    country: 'COL',
};

let{name, ...all} = obj;
console.log(name, all);


//utilizando las propiedades de propagacion, podremos anadir 1, 2, 3
//o cuantas propiedades queramos a un objeto
const obj = {
    name: 'sergio',
    age: 23,
};

//unir el obj con el obj1
const obj1 = {
    ...obj,
    country: 'COL',
}

console.log(obj1);

//cuando ha terminado el llamado y poder ejecutar una funcion
const helloworld = () => {
    return new Promise ((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve('Hello world'),3000)
            : reject(new Error ('test error'))
    });
}

helloworld()
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))
    //nuevo
    .finally(()=> console.log('Finalizo'));


//agrupar bloque del regex y poder acceder a ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //regex
const match = regexData.exec('2018-04-20');
//entender como esta constituido cada elemento y acceder a cada dato en particular (mes o dia)
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);