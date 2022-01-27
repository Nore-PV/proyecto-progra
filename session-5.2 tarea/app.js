/*
Crear una nota que me permita determinar la calificación de 3 alumnos uno con nota de 100, otro con nota de 80
y el ultimo con nota de 59
let nota = window.prompt('Valor caificación 1');
let nota2 = window.prompt('Valor caificación 2');
let nota3 = window.prompt('Valor caificación 3');
nota = Number(nota);
nota2 = Number(nota2);
nota3 = Number(nota3);
console.log(typeof (nota));
console.log(typeof (nota2));
console.log(typeof (nota3));
// calcularNota(100);
// calcularNota(89);
// calcularNota(59);
*/

let notaFinal1 = 100;
let notaFinal2 = 80;
let notaFinal3 = 59;

const notaFinal = (nota) => {

    //nota = window.prompt("Introduzca su valor");
    let notaLetra;
    nota = +nota;
    console.log(nota);
    if (nota >= 90 && nota <= 100) {
      notaLetra = "A";
      console.log(nota + " es igual a " + notaLetra);
    } else if (nota >= 80 && nota <= 89) {
      notaLetra = "B";
      console.log(nota + " es igual a " + notaLetra);
    } else if (nota >= 70 && nota <= 79) {
      notaLetra = "C";
      console.log(nota + " es igual a " + notaLetra);
    } else if (nota >= 60 && nota <= 69) {
      notaLetra = "D";
      console.log(nota + " es igual a " + notaLetra);
    } else if (nota < 60) {
      notaLetra = "F";
      console.log(nota + " es igual a " + notaLetra);
    }
  }
notaFinal(notaFinal1);
notaFinal(notaFinal2);
notaFinal(notaFinal3);

