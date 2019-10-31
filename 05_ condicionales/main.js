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