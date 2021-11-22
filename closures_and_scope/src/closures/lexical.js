
//
const buildCount = (i)=>{
    let count = i;
    //vida del closure
    const displayCount = () =>{
        console.log(count++); //podemos acceder a count pq esta adentro de la misma funcion madre 1 nivel mas abajo
    };
    return displayCount; // recuerda cual es el valor y es retornable afuera del scope
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

//tenemos un nuevo alcance/ambito/closure y arroja valores diferentes
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();