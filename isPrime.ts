/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
* En matemáticas, un número primo es un número natural mayor que 1
* que tiene únicamente dos divisores positivos distintos: él mismo y el 1.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(num: number): boolean {

    if (num <= 1 || isNaN(num) || !isFinite(num) ) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    for (let i = 3 ; i < num ; i+=2) {
        if (num % i === 0) {
            return false;
        }

    }

    return true;
}

console.log(isPrime(67));