//LOOPS

//For loop
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

const carrito = [
    { nombre: 'Monitor 20"', precio: 500 },
    { nombre: 'TV 50"', precio: 700 },
    { nombre: "Tablet", precio: 400 },
    { nombre: "Audifonos", precio: 500 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Mouse", precio: 200 },
];

// for (let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre, carrito[i].precio);
// }

// WHILE

// let i = 1;
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }

//     i++;
// }

// let i = 0;
// while (i < carrito.length) {
//     console.log(carrito[i].nombre);
//     i++;
// }

// DO WHILE
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
