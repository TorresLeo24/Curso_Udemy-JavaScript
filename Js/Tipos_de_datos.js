// STRING
/*
const producto = "Monitor de 20 pulgadas"; // Esta es la más común
const producto1 = String("Monitor de 30 pulgadas");
const producto2 = new String("Monitor de 40 pulgadas");

console.log(producto);
console.log(producto1);
console.log(producto2);

const producto3 = "Sandwiches de mantequilla y mortadela";
console.log(producto3.length, producto3);
console.log(producto3.indexOf("mortadela")); // Saber en que posición se encuentra la palabra o letra
console.log(producto3.includes("mantequilla")); // Retorna true/false en caso de que el valor exista o no

/* ------------------------
--------------------------- */

// NUMEROS
/*
const numero1 = 100;
const numero2 = 200;
const numero3 = 56;
const numero4 = 38;

console.log(numero1, numero2);
console.log(numero1 * numero2);
console.log(numero2 % numero1);
*/

/* ------------------------
--------------------------- */

// OBJETO MATH

/*
let resultado;
resultado = Math.PI;
resultado = Math.round(3.4);
resultado = Math.ceil(2.2); // ceil siempre redondea hacia arriba
resultado = Math.floor(2.9); // floor siempre redondea hacia abajo
resultado = Math.sqrt(3000);
resultado = Math.abs(-230);
resultado = Math.min(3, 5, 1, 6, 7);
resultado = Math.max(3, 5, 1, 6, 7);
resultado = Math.floor(Math.random() * 100); // Generando numeros aleatorios del 0 al 100


console.log(resultado);
*/

/* ------------------------
--------------------------- */

// ORDEN DE LAS OPERACIONES
/*
let resultado;

resultado = (20 + 30) * 2;
resultado = (100 + 200 + 300) * 1.15;

// console.log(resultado);

/* ------------------------
--------------------------- */

// Incrementos
/*
let puntaje;
puntaje = 10;
puntaje++; // incremento en 1 ---------> 11
++puntaje; // ----------> 12
puntaje += 10;

puntaje--; // decremento

console.log(puntaje);
*/

/* ------------------------
--------------------------- */

// BOOLEANS
/*
const boolean1 = true;
const boolean2 = false;
const boolean3 = "false";

console.log(boolean1);
console.log(boolean2);
console.log(typeof boolean3, boolean3); //typeof, regresa el tipo de datos de la variable

const boolean4 = new Boolean(true);
console.log(typeof boolean4, boolean4);
*/

/* ------------------------
--------------------------- */

// OBJETOS

// const nombreProducto = 'Monitor 20"';
// const precio = 20;
// const disponible = true;

// const producto = {
//     nombreProducto: 'Monitor 20"',
//     precio: 300,
//     disponible: true,
// };

// console.log(producto);
// console.log(producto.precio);
// console.log(producto["precio"]);

// Modificar los objetos

// eliminar
// delete producto.disponible;
// console.log(producto);

//agregar
// producto.imagen = "imagen.jpg";
// console.log(producto);

// DESTRUCTURANDO OBJETOS

// const producto = {
//     nombreProducto: 'Monitor 20"',
//     precio: 300,
//     disponible: true,
// };

// const precioProducto = producto.precio;
// console.log(precioProducto);
// const nombreProducto = producto.nombreProducto; // se le puede asignar el mismo "nombreProducto", porque lo que está dentro del constructor
// console.log(nombreProducto); // se le conocen como propiedades, mientras que al que se le está asignando, vendría siendo
// // una variable

// const { precio } = producto; //la variable a escribir, tiene que tener el mismo nombre a la propiedad que se quiere
// console.log(precio);         // extraer del objeto

// const { precio, nombreProducto } = producto;
// console.log(precio);
// console.log(nombreProducto);

// console.log(`Precio: ${precio} || Producto: ${nombreProducto}`);
// console.log("Precio: ", precio, ",", "Producto: ", nombreProducto);

// MÉTODOS DE OBJETOS
// "use strict"; // ejecutar el codigo js de forma estricta, siguiendo las buenas practicas
// const producto = {
//     nombreProducto: 'Monitor 20"',
//     precio: 300,
//     disponible: true,
// };

// // Prevenir que un objeto no se pueda modificar

// Object.freeze(producto); //No permite agregar, ni eliminar, ni cambiar valores
// // producto.imagen = "imagen.jpg";
// console.log(Object.isFrozen(producto)); // Saber si un objeto está sellado (no poder insertarle nuevas propiedades)
// Object.seal(producto); // Te permite cambiar los valores existentes, pero no permite eliminar o agregar
// console.log(producto);

// UNIR DOS OBJETOS

const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true,
};

const medidas = {
    peso: "1kg",
    medida: "1m",
};

const nuevoProducto = { ...producto, ...medidas };
console.log(nuevoProducto);
