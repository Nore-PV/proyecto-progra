

let persona1 = {
    nombre: 'Fernanando',
    edad: 25
};

let persona2 = {
    nombre: 'Noré',
    edad: 22
};

let persona3 = {
    nombre: 'Dany',
    edad: 32
};

let personas = [ persona1, persona2, persona3];

for (let i = 0; i<personas.length; i++ ){

    // console.log(`${ personas[0] } -- ${ personas.edad }`);
    console.log(`${personas[i].nombre} -- ${personas[i].edad}`);

}


