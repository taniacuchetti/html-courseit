

//Crear una funcion que devuelva el mayor numero dentro de un array

// Ejemplo

// const arr = [3,5,1,10,23,13] // 23



function numeroMayor (arr){
    let max = 0;
    arr.forEach(function (number) {
      if (number > max) {
          max = number
      }  
    })
    console.log(max)
}


// entonces en la consola tengo que escribir el array para ejecutarla:
// numeroMayor([2,54,1,234,56,43])

let array = [40, 1, 5, 6, 25]

 function maxNum(array) {
     array.sort(function(a,b){return b-a});
     console.log(array[0])
 }
maxNum([40, 30 , 54, 6, 7])



let array = [3,5,10,23,13];

function numeroMax (arr) {
   let number = 0;
   for (i = 0; i < arr.length; i++){
     if (arr[i] > number) {
         number = arr[i];
     }  
   }
   console.log("EL número mayor del array es " + number);
}



Math.max.apply(null,[30,20,10,50,,30])