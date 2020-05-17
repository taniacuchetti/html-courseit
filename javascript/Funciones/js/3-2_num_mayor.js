

// Crear una funcion que devuelva los dos numeros mas grandes dentro de un array

// Ejemplo

// const arr = [3,5,1,10,23,13] // 23,13

let array = [40, 1, 5, 6, 25]

 function maxNum(array) {
     array.sort(function(a,b){return b-a});
     console.log(array[0] + ", " + array[1])
 }

maxNum([40,65,32,4,6,7])



//Ejercicio 3
//Crear una funcion que devuelva los dos numeros mas grandes dentro de un array
//Ejemplo const arr = [3,5,1,10,23,13] // 23,13

function losDosMayores(arr) {

    let firstMax = 0;
    let secondMax = 0;

    arr.forEach(function (number) {
        if (number > firstMax)
            firstMax = number
    })

    console.log(firstMax)

    arr.forEach(function (number) {
        if (number > secondMax && number != firstMax)
            secondMax = number
    })
    console.log(secondMax)
}