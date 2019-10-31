// for(let i = 0; i <= 100; i = i + 10){
//     console.log(i);
// }

//empiece en 10, termine en 1000 y vaya de 5 en 5

//empiece en 500, termine en 0 y vaya de 2 en 2

//empiece en -763 termine en 15 y vaya de 3 en 3

// Ciclo Infinito
// OJO NO HACER
// for(let i = 1; i<= i ; i= i+1){
//     console.log(i);
// }

// for(let i = 5; i <= 1000; i = i + 5){
//     console.log(i);
// }

// for(let i = 500; i >= 0; i = i - 2){
//     console.log(i);
// }

// for (let i = -763; i <= 15; i = i + 3) {
//     console.log(i);
// }

// i = i + 1 o i++
// i = i - 1 o i--


//sintaxis mas comun
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " fizzbuzz");
    } else if (i % 5 === 0) {
        console.log(i + " buzz");
    } else if (i % 3 === 0) {
        console.log(i + " fizz");
    } else {
        console.log(i);
    }
}
