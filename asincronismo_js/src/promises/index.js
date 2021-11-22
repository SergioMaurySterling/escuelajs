
//ejercicio 1
const somethingWillHappen = () =>{
    //sintaxis para crear promesas, argumentos de si se ejecuta o si es rechazada
    return new Promise((resolve, reject) =>{
        //validación 
        //si esto es verdadero:... si no es verdadero:...
        if(false){
            resolve('Hey!');
        } else {
            reject('Whoooops!');
        }
    })
};

//inicializar funcion
//tenemos elementos: .then: tengo una respuesta y con ella hago 
// .catch: mostrar el error en caso lo tengamos
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


//ejercicio 2
const somethingWillHappen2 = ()=>{
    return new Promise ((resolve, reject)=>{
        if (true){
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whooooops!');
            reject(error);
        }
    })
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


//Como correr varias promesas al mismo tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        //regresa un arreglo con las respuestas de ambas
        console.log('Array of results',response)
    } )
    .catch(err => console.error(err));


 