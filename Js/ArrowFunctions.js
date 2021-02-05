//ARROW FUNCTIONS

const suma1 = (n1, n2) => console.log(n1 + n2);
suma1(5, 10);

const Aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
Aprendiendo("JavaScript");

const meses = ["Enero", "Febrero", "Marzo", "Abril"];

let carrito = [
    { nombre: 'Monitor 20"', precio: 500 },
    { nombre: 'TV 50"', precio: 700 },
    { nombre: "Tablet", precio: 400 },
    { nombre: "Audifonos", precio: 500 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Mouse", precio: 200 },
];

//foreach
meses.forEach((mes) => {
    if (mes == "Marzo") {
        console.log("Marzo si existe");
    }
});

//SOME, ideal para arreglos de objetos
let resultado;
resultado = carrito.some((producto) => producto.nombre === "Audifonos");
// console.log(resultado);

//Reduce

resultado = carrito.reduce(
    (total, producto) => total + producto.precio, //sumando todos los precios
    0, //Diciendole que inicia en 0
);
console.log(resultado);

// Filter

resultado = carrito.filter((producto) => producto.precio == 400);
console.log(resultado);
resultado = carrito.filter((producto) => producto.precio > 400);
console.log(resultado);
