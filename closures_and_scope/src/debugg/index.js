 var a = 'Hello';

 function hello(){
     let b ='Hello B';
     const c = 'Hello C'
     if (true){
         let d = 'Hello D';
         debugger // debuggear en el navegador el codigo desde la consola en "about:blank"
     }
 };

 hello();


 //xxxx
const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) =>{
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);