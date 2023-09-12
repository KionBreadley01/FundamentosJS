// Funciones con javascript 
// function nombre (parems)
// body function 


// const nombre  0 function(parems){
    // bodyfunction
// }


// funcion sin parametros sin retorno
function saluda( ){
    console.log('Helooo!');
}
saluda();
// funcion  con parametros sin retornos 
const saludaA = function(name){
    console.log(`Hola ${name}`);
}
saludaA('Batman');
// funcion con parametros  y retornos
const duplica = function(num){
    return num * 2;
}
const doble = duplica(26);
console.log(doble);







const getfulName = (firstname, lastName) =>{
    return firstname + '' + lastName ;

}
const nombre = getfulName ('peter','parket');
console.log(nombre);
// podemos emitir () con unicomparametro 
const minusculas = (word) => {
    return word. toLowerCase();
}
console.log(minusculas('Hello'))
const mayusculas = word => {
return word.toUpperCase();
}
console.log(mayusculas('Hello'));
// Podemos emitir llaves y retun si solo haty una linea
const cuadrado = num => num * num;
console.log (cuadrado(25));
