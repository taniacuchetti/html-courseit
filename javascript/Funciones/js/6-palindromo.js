//Ejercicio 6
//Crear una funcion que determine si una palabra es palindromo o no. (Palindromo son palabras capicua)
//Ejemplo palindrome('juani') // false palindrome('sugus') // true



function palindrome(str) {  //Una función que se llama palíndromo que recibe un string
    let lowerCaseStr = str.toLowerCase();  //Define una primer una variable que se llama lowerCaseStr (lower case string) y que convierta toda la letras en minúsculas para que compare minúsculas con mínusculas, sino no va a dar igual porque s != S
    let checkPalindrome = lowerCaseStr.split("").reverse().join("");  //Esto lo que va a hacer es un split que hace que sea un array de letras separadas, con reverse das vuelta el array, lo invierte y con join lo volvés a unir para que sea un string sin espacios, entonces te da la palabra al revés

    if(str === ""){  //Si el string es igual a "vacío"
        console.log("No ingresaste ninguna palabra")  //No ingresaste ninguna palabra
    } else if (lowerCaseStr == checkPalindrome) {  //si la palabra inicial "sugus", es igual a la invertida "sugus":
        console.log("La palabra " + str.toLowerCase() + "es palindromo");  //Que imprima el string de la primer variable + el texto en la consola
    } else {
        console.log("La palabra " + str.toLowerCase() + " no es palindromo");  //Sino que imprima el string de la primer variable + el texto en la consola
    }
}

palindrome("SugUS")