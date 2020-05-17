//Ejercicio 5
//Crear una funcion que diga todos los elementos que aparecen solo una vez en un array.
//Ejemplo:const arr = [1,2,3,2,3,4,1] // 4

function unicos(arr) {   //Función que recibe un array

    let uniques = [];  //Variable general con array vacio que va a recibir números

    for (let i = 0; i < arr.length; i++) {   //Empieza a iterar el array que recibimos como parámetro. 
                                             
        let esRepetido = false;  //En cada iteración, define una variable esRepetido seteada en false. Eso se hace para después poder declararla como true y que la función la descarte y si No es true, que la pushee al array de "uniques"
        
        for (let j = 0; j < arr.length; j++) {   //Empieza a iterar con una variable j y a recorrer todo el array de nuevo para tener 2 variables y poder comparar

            if (arr[i] == arr[j] && i != j) {  //Si el elemento del array 1 es igua al elemento que se está comparando del array 2, define la variable esRepetido como true, pero siempre y cuando i no sea igual a j (es decir que no se compare con sí mismo, es como decir yo es igual a yo,que no compare [0] con [0], sino [0] con [1][2][3][4][5]) 
               esRepetido = true; 
            }
        }

                if (!esRepetido) {   //Si el elemento NO es repetido, lo pushea en el array de únicos. 
                    uniques.push(arr[i]);
                }
            }
       
    console.log(uniques);
}


