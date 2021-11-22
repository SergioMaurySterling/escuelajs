//transformar objeto a matriz / devolver la clave y valores de una matriz
const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//me devuelve los valores de un objeto a un arreglo
const info = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(info);
console.log(values);
console.log(values.length);


//añadir caracteres o valores al inicio o el final de una constante o variable
const string = 'hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(12, '----'));
console.log('food'.padEnd(12,'-----'));


//Async Await: funcion, promesa, invocarla

//propuesta 1
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (false)
            ? setTimeout(() => resolve('Hellos world'), 3000)
            : reject(new Error('Test error'))
    })
};

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

//propuesta 2, manejar correctamente los errores
const anotherFunction = async()=>{
    try{
        const hello = await helloWorld();
            console.log(hello); 
    } catch (error){
        console.log(error);
    }
}

anotherFunction();

