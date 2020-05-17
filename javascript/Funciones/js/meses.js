


function getDaysOfAMonth(month) {
  if (month == "enero" 
    || month == "mayo" 
    || month == "julio" 
    || month == "agosto"
    || month == "octubre" 
    || month == "diciembre") {
   days = 31;
  } else if (month == "febrero" 
    || month == "marzo" 
    || month == "abril" 
    || month == "junio" 
    || month == "septiembre") {
    days = 30;
  } else if (month == "febrero") {
      days = 28;
  } else {
    console.log("Ingrese un mes válido.");
    return; //Esto hace que retorne vacío, que cancele la ejecución. Que no avance más.   
  }
    console.log("El mes " +month+" tiene "+days+" días."); //el console.log no suele ser la finalidad del Código, ahora nos es meramente informativo.
    return days; // Esto es lo que necesitamos, el valor de la cantidad de días y con esto podríamos hacer un saludos específico según el resultado:
}


getDaysOfAMonth("enero")
getDaysOfAMonth("abril")
getDaysOfAMonth("septiembre")
getDaysOfAMonth("marzo")


function greetBirthMonth(month){
const days = getDaysOfAMonth(month);

if (days == 31){
    console.log("Felicidades por cumplir en un mes tan copado como lo es el mes de " + month);
} else if (days == 30){
    console.log("Que pena que el mes de "+ month + " tenga tan pocos días, solo "+days +" días");
} else if (days == 28) {
    console.log("Que pena que el mes de "+ month + " tenga tan pocos días"); 
}
}


// const days = significa que dándole un mes, se va a convertir en la cantidad de días que tiene el 
// mes (porque la función anterior le pedimos que retorne cantidad de días). 
// “days” va a tener el valor de la ejecución getDaysOfAMonth(month);