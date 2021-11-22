//crear variables privadas adentro del closure
//obtener info de la variable o asignarle por medio del metodo 
//pero nunca desde afuera, socope no local
//DATOS PRIVADOS

const person = () =>{
    var saveName = 'Name';
    return{
        getName: ()=>{
            return saveName;
        },
        setName: (name)=>{
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Sergio');
console.log(newPerson.getName());