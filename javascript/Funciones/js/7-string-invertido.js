//Crear una funcion que devuelva el string que le enviamos pero invertido.

//reverse('juani') // inauj


function reverse(word) {   //una función que se llame reverse que reciba una palabra

    let inverse = "";   //Definimos una variable vacía que contenga un string

    for (let i = word.length - 1; i >= 0; i--) {  //Esto en vez de ser como siempre desde el 0 hasta el número más alto 
        inverse = inverse + (word[i])  //Concatena inverse + la letra que sigue: agarra la variable inverse y le dice que sea igual a lo que ya tiene osea "inverse" + la letra en cuestión que viene desde arriba hacia abajo y lo va guardando en una variable
    }

    console.log(inverse)
}

//Todo esto hace lo mismo que:

function myReverse = (word) => {
    return word.split("").reverse().join()
}