
   
   
     
   //espejo de arrays donde el índice va a ser el mismo y vincular una con la otra.
   
   function educandoAlSoberano() {
    const palabras = ["setiembre", "almondiga", "dentrífico", "murciegalo", "alverja"];
    const respuestas = ["septiembre", "albóndiga", "dentífrico", "murciélago", "arveja"];
    const i = Math.floor(Math.random() * palabras.length)

    console.log("La palabra " + palabras[i] + " se escribe " + respuestas[i])
}

