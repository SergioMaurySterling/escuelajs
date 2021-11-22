const anotherFunction = ()=>{ 
    for (let i = 0; i<10; i++){ //si usamos let apareceran los numeros del 1 al 10 normal pq no se reasignaran
        setTimeout(()=>{        //tener el alcance que va a recordar y que sea necesario, NO USAR VAR
            console.log(i);
        },1000)
    }
};

anotherFunction();

//los closures sirven para manejo de valores privados y creacion de metodos