// condicionales javascripts 
// if(exp)(Body)
const age =18 ;

if(age >= 18){
    console.log('Es mayor ');
}

// if (exp) (body) else (body)
if(age >= 18){
    console.log('Es mayor');
} else{
    console.log('Es mayor')
}
// if termino (exp)? true: false:
(age >= 18)? console.log('Es mayor'): console.log('Es menor');
(age >= 18)?
    console.log('Es mayor'):
    console.log('Es menor');
// if(exp) {} else if (exp) {} else {} 
const ppt = Math.ceil(Math.random() * 3);
if(ppt === 1){
    console.log('Cayo Predra');
} else if (ppt === 2){
    console.log('Cayo papel');
} else{
    console.log('Cayo Tijera');
}

// swich, else 
const day = Math.ceil(Math.random()*7 );
switch(day){
    case 1: 
        console.log('Es Domingo');
        break;

        case 2: 
        console.log('Es Lunes ');
        break;

        case 3: 
        console.log('Es Martes');
        break;

        case 3: 
        console.log('Es Mirecoles');
        break;

        case 3: 
        console.log('Es Jueves ');
        break;

        case 2: 
        console.log('Es Viernes');
        break;

        case 2: 
        console.log('Es Sabado');
        break;
}
  


// Truthy and falsy 
// Distintos tipos de datos evalueados como booleam 
// 0 ->false 
// 1
// algo -> true
const apples =0;
if(apples > 8 ){
    console.log('Tenemos ${apples} manzanas');

} else{
    console.log('No hay manzanas');
}
let userLoggeado ='';
let usuarioActual;
userLoggeado?
    UserActual = userLoggeado:
    UserActual = 'invitado';


console.log(usuarioActual);
userLoggeado ='juan';
UserActual = userLoggeado||'i¡Invitado';
console.log(UserActual);

