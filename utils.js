//where we put some random function
 function generateRandomNumber (){
    return Math.floor((Math.random()*100)+1)
 }

 function toFarenhite(celcius){
    return (celcius * 9/5) + 32;
 }

 const sayHi = (name) => {
   console.log(`Hi ${name}`);
}

 //common JS or the Native Node.js
 module.exports =  sayHi;
