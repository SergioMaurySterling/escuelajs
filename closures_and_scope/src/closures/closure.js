
//No esta guardando el valor que se toma saveCoins en cada ocasion
const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

//MoneyBox con estructura de closure
const moneyBox = () => {
    var saveCoins = 0;
    //tendra un scope que hara el closure(estructura del closure), recordara el ambito en que fue asiganda la variable
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
