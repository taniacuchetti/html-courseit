

let numeroRecibido = 50;


for (let i = 0; i < numeroRecibido; i++) {
 var num = (i);   
}



function fizzBuzz(numero) { 
   if (numero % 3 == 0 && numero % 5 == 0 ) {
     console.log("FizzBuzz");  
   } else if (numero % 3 == 0) {
       console.log("Fizz");
   } else if (numero % 5 == 0) {
     console.log("Buzz"); 
   } else {
     console.log(numero); 
   }
}

fizzBuzz(num);

// así no funciona porque num no es la iteración del código, es solo una variable fija
// en cambio si lo es "i", que es una iteracíon entre 0 y 50. No se le puede hacer un ,length a un numero 



function fizzBuzz(numero) { 
    for (let i = 0; i < numero; i++) {  // el bucle for define una variable que es "i" y esa es la que uso para que haga todas las validaciones, por eso no vuelvo a poner numero, sino que éste define solo desde qué numero arranco
    if (i % 3 == 0 && i % 5 == 0 ) {
      console.log("FizzBuzz");  
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz"); 
    } else {
      console.log(i); 
    }
 }
}
 fizzBuzz(50);