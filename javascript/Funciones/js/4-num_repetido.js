
//Ejercicio 4
//Crear una funcion que diga todos los elementos que aparecen mas de una vez en un array.
//Ejemplo: const arr = [1,2,3,2,3,4,1] // 2,3,1

function duplicados(arr) {

    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] == arr[j]) {
                let noExiste = duplicates.indexOf(arr[i]) == -1;

                if (noExiste) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    console.log(duplicates);
}