/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzBuzz() {

    let fizzBuzz: string = "";

    for (let i = 0 ; i <= 100 ; i++ ) {

        if (i === 0) {
            fizzBuzz+= "";
        } else if (i % 15 === 0) {
            fizzBuzz += console.log(`${i} - fizzbuzz`);
        } else if (i % 5 === 0) {
            fizzBuzz += console.log(`${i} - buzz`); 
        } else if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzz += console.log(`${i} - fizz`);
        } else {
            fizzBuzz += console.log(`${(i)}`);
        }

        console.log(`\n`)
    }
}

fizzBuzz();