
function describirPersona( p ) {

    //console.log('Noré tiene una edad de 22 y mide 1.60');
    console.log(`${ p.nombre } tiene una edad de ${ p.edad } y mide ${ p.estatura}`)
}

let persona = { 
    nombre: 'Noré',
    edad: 22,
    estatura: 1.60,

 }

 describirPersona(persona); 

 