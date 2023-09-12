const respuesta = document.getElementById('respuesta');
function eigball(){
    const opcion = Math.ceil(Math.random() * 8 );
    let resp;
    switch(opcion){
       case 1: 
           resp =' 1 todos saldra bien!😊';
           break;
           default:
               resp = '2 No los se 👀';
        case 2:
            resp = ' 3 Vete a la verga (☞ﾟヮﾟ)☞'
            break;

        case 3:
             resp = ' 4 ponte a jugar VRO ༼ つ ◕_◕ ༽つ';
             break;
        case 4:
            resp = ' 5 es hora de dormir'
            break;
        case 5:
            resp = ' 6 Tendras cancer Andy (⊙_⊙;)'

    }
    respuesta.innerHTML = resp;

}