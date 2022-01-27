 let dia = 0;   //1 = Lunes, 2 = martes....
                // 0 = Domingo

switch( dia ) {

    case 0:
        console.log(' Es domingo');
        break;
    case 1:
        console.log(' Es Lunes');
        break;
    case 2:
        console.log(' Es martes');
        break;
    case 3:
        console.log(' Es miercoles');
        break;
    case 4:
        console.log(' Es jueves');
        break;
    case 5:
        console.log(' Es viernes');
        break;
    case 6:
            console.log(' Es sabado');
            break;
    default:
        console.log('El día ingresado no es permitido');

}

if( dia === 0){

    console.log('Confirmado, hoy es domingo');
} else if ( dia === 1 ){
    console.log('Confirmado, hoy es lunes');

} else if ( dia === 2 ){
    console.log('Confirmado, hoy es martes');

} else if ( dia === 3 ){
    console.log('Confirmado, hoy es miercoles');

} else if ( dia === 4 ){
    console.log('Confirmado, hoy es jueves');

} else if ( dia === 5 ){
    console.log('Confirmado, hoy es viernes');

} else if ( dia === 6 ){
    console.log('Confirmado, hoy es sabado');

} else
console.log('Dato no valido');




