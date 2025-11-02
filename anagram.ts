/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(string1: string, string2: string): boolean | null {

    if (!string1 || !string2 || typeof string1 !== "string" || typeof string2 !== "string") {
        return null
    }

    const getLetters = (originalString: string) => originalString.split("");
    
    const splittedString1: string[] = getLetters(string1);
    const reversedString1: string[] = splittedString1.reverse();
    const treatedString1: string = reversedString1.join("");

    console.log(treatedString1);

    const isAnAnagram: boolean = treatedString1 === string2;

    console.log(isAnAnagram);
    return isAnAnagram;
}

isAnagram("roma", "amor");