//Funciones

// alert();
// prompt();
// console.log();
// Number();
// if();
// for();


//function declaration
function suma() {
    console.log(5 + 5);
}

// suma();

//function expression

let resta = function () {
    console.log(10 - 9);
}

// resta();

// ARROW FUNCTION

const suma2 = (a = 0, b = 0) => {

    console.log(a + b);

};

suma2(10, 10);
suma2();
suma2(100, 50);
suma2();

const saludar = (usuario = "invitado") => {
    console.log("Bienvenido: " + usuario);
}

saludar("Osvaldo");
saludar();

function saludar2(persona = "pepe") {
    console.log("hola " + persona);
}

saludar2();
saludar2("juanito");

const juego = () => {

    let jugadorUno = prompt("Jugador Uno: piedra, papel o tijeras?");

    let jugadorDos = prompt("Jugador Dos piedra, papel o tijeras?");

    console.log(jugadorUno);
    console.log(jugadorDos);

    let juego = jugadorUno + jugadorDos;

    if (jugadorUno === jugadorDos) {
        console.log("empate");
    } else if (juego === 'papelpiedra' || juego === 'tijerapapel' || juego === 'piedratijera') {
        console.log("Gana jugador uno")
    } else if (juego === 'piedrapapel' || juego === 'papeltijera' || juego === 'tijerapiedra') {
        console.log("Gana jugador dos")
    } else {
        console.log("no es un valor valido");
    }

}


const ciclo = (x = 1, y = 10, z = 1) => {
    for (let i = x; i <= y; i = i + z) {
        console.log(i);
    }
}

//pasa coomo primer parametro el inicio, como segundo el final y como tercero de cuanto en cuanto
ciclo(5, 50, 2);

const tablas = (a , b) => {
    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(i + "x" + j + "=" + i * j);
        }
    }
}

tablas(2, 20);

const nuevaSuma = (a=0 , b=0) => {
    return a + b ;
}

const nuevaResta = (a, b) => {
    return a - b ;
}


const multiplicacion = (a , b) => {
    return(a * b);
}

console.log(multiplicacion(nuevaSuma(), nuevaResta(9,1)))




