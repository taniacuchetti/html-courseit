
//declaramos la función de esta manera con los parámetros que espera (name, weather)

function greet(name, weather) {
   console.log("Que onda, " + name);
   console.log("Alto día " + weather); 
}

//la función saluda a todos sin repetir el código con el parámetro para name y weather
greet("Coty","soleado");
greet("Lu","nublado");
greet("sebas","copado");


function sumar(num1,num2) {
    const resultado = num1 + num2;
    const texto = "La suma de " + num1 + " más " + " es " + resultado;
    return num1 + num2;
}

console.log(sumar(30,20));
console.log(sumar(50,20));
console.log(sumar(70,20));
console.log(sumar(80,20));
