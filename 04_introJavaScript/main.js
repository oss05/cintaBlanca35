//Comprobar si esta bien linkeada
// alert('Hola');

// var numero = 10

// valor numerico
let numero = 10;
//valor strig o texto
let texto = "Ricardo";
let texto2 = 'Ricardo2';
//valor booleanohttps://eloquentjavascript.net/
let verdadero = true;
let falso = false;
// objeto
let object = {};
// arreglo
let array = [];


//-------------------------->

let x = 100;
let y = 50;
let suma = x + y
// console.log( x + y);
// console.log(suma)

// + - * / %

let cambiar = 1500
// console.log(cambiar);
cambiar = 10
// console.log(cambiar);
cambiar = "Texto";
// console.log(cambiar);


//Arrays

let frutas = ["melon", "sandia", "fresa"];
// console.log(frutas[1]);
frutas[3] = "Manzana";
frutas.push("guayaba");
// frutas.pop()
// frutas.pop()
frutas.splice(1, 2)
// console.log(frutas);


//object

let persona = {
    nombre : "Ricardo",
    direccion : "Azcapo",
    telefono : "5512468746",
    email : "ricardo.dev@dadsasdas",
    edad : "21",
    trabajos : ["Dev:f", "Developer", "Mami"],
    mascotas :  {
        perrito : "Salchicha",
        gatito : "siames",
        pez : "dorado"

    }
  
}


// console.log(persona.mascotas.pez);

// ---------------------------->


// let nombre = prompt("Ingresa tu nombre");
// let edad = prompt("Ingresa tu edad");
// let tel  = prompt("Ingresa tu celular");

// console.log('Nombre: '+ nombre);
// console.log('Edad:' + ' ' + edad);
// console.log('Celular: ' + tel);

// NaN -> not a number
let fecha = Number(prompt('Ingresa tu año de nacimiento'));

// console.log(typeof(fecha))

// let anio = Number(fecha)
// console.log(typeof(anio))

let anioActual = 2019;

console.log(anioActual -fecha);





