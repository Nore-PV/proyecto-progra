/*
let carro1 = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3
}; */

class Carro {
  constructor(marca, tipo, puertas) {
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;

    this.creadoEn = "Hoy";
    this.encendido = false;
    this.gasolina = 100;
  }

  encederCarro() {
    if (this.encendido) {
      console.error("El carro ya estaba encendido... se daño el motor");
    } else {
      this.encendido = true;
      console.log("El carro esta encendido");
    }

    return this;
  }

  realizarViaje(consumo) {
    consumo = +consumo;

    this.gasolina = this.gasolina - consumo;
    if (this.gasolina < consumo) {
      console.error("No puede realizar el viaje debido a que ya no tiene gasolina");
    } else if (this.encendido){

        console.log('Buen viaje');
        
    } if (this.encendido){

        console.log('Vuelva pronto');

    }else{ 
        
        console.error('El viaje no se puede realizar, carro apagado');
        return 'Enciende el carro';
    }
   return 'Le queda ' + this.gasolina;
  }
}

let carro = new Carro("Mazda", "Sedan", 2);
/*console.log(carro1);*/

console.log(carro);
