
// Hay que hacer un objeto o un array con una función que elija un número aleatoreamente dentro de un array y ese
// número es el que vas a usar para que después te nombre la palabra que eligió.

 /* Hacer una función que retorne AL AZAR, una palabra mal escrita y al lado su corrección, como por ejemplo:
 "Almondiga",
 "Setiembre",
 "Dentrífico",
 "Pastaflora",
 "Tergopol",
 "Murciégalo",
 "Estuatua",
 "Sambuche",
 "Captus",
 "Mondiola",
 "Picapuerta"
 "Zanagoria"
 "Picoparéntesis"
 "Me relaja"
 "Alverja" */




palabras = {
    "Almondiga":"Albóndiga",
    "Setiembre":"Septiembre",
    "Dentrífico":"Dentífrico",
    "Pastaflora":"Pastafrola",
    "Tergopol":"Telgopor",
    "Murciégalo":"Murcielago",
    "Estuatua":"Estatua",
    "Sambuche":"Sambuche",
    "Captus":"Cactus",
    "Mondiola":"Bondiola",
    "Picapuerta":"Picapuerta",
    "Zanagoria":"Zanahoria",
    "Picoparéntesis":"Signo de mayor y menor",
    "Me relaja": "Me empalaga",
    "Alverja": "Arveja"
  }


  function educandoALBurro() {
     cont    
         
  }


  const palabras = { "Almondiga": "Albóndiga",
    "Murciegalo": "Murciélago",
    "Setiembre": "Septiembre",
    "Dentrífico": "Dentífrico",
    "Pastaflora": "Pastafrola",
    "Tergopol": "Telgopor",
    "Estuatua": "Estatua",
    "Sambuche": "Sandwich",
    "Captus": "Cáctus",
    "Mondiola": "Bondiola",
    "Picapuerta": "Picaporte",
    "Zanagoria": "Zanahoria",
    "Picoparéntesis": "Chevron",
    "Me relaja": "Me empalaga",
    "Alverja": "Arveja"};

function educandoAlBurro(palabras) {
	const random = Math.floor(Math.random() * Object.keys(palabras).length)
	const malEscrita = Object.keys(palabras)[random];
	const bienEscrita = Object.values(palabras)[random];
	
console.log("No digas " + malEscrita.toLowerCase() + ", se dice " + bienEscrita.toUpperCase() + "!!!");
}

educandoAlBurro(palabras)