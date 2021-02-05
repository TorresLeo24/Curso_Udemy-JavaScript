const carrito = [
    { nombre: 'Monitor 20"', precio: 500 },
    { nombre: 'TV 50"', precio: 700 },
    { nombre: "Tablet", precio: 400 },
    { nombre: "Audifonos", precio: 500 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Mouse", precio: 200 },
];

//Foreach

// carrito.forEach(function (producto) {
//     console.log(producto);
// });

// carrito.forEach((producto) => console.log(producto));

// MAP

carrito.map((producto) => console.log(producto));
const arreglo = carrito.map((producto) => producto.nombre);
const arreglo1 = carrito.map((producto) => `${producto.nombre} precio: ${producto.precio}`);
console.log(arreglo1);

//Si se quiere filtrar por nombre o precio, utiliza map ya que crea un nuevo arreglo
//se utiliza el foreach si se quiere iterar o mostrar en pantalla/consola
