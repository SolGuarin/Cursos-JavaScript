//Condicionales 

//if
if (true) {
    console.log("Hola")
}

//else
if (false){
    console.log("Hola");
} else {
    console.log("Soy falso")
}

//else if
var edad = 18;

if (edad === 18){
    console.log("Puedes votar, será tu primera votación")
} else if (edad > 18){
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aún no puedes votar")
}

//operador ternario
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un 1" : "No, no soy 1"