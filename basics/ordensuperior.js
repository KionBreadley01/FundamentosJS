// Funciones de orden superior 
// High order Functions
/*
fucniones que reciben funciones 
como ´parametros
*/
const myFunction = ()=> {
    console.log('Ejecute mu funcion');
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () =>{
    console.log('Ejecute Funcion One');
}
const funTwo = (username) => {
    console.log('Ejectite Funcion Two');
    console.log('hola' + username);
}
const funThree = (otherFunction) => {
    console.log('Inicia funcion 3');
    otherFunction();
    console.log('Termina funcion 3');
}

funOne();
funTwo('Juan');
funTwo('Clark Kent');
funThree(funOne);
funThree(() => console.log('Soy una Arrow Function'));