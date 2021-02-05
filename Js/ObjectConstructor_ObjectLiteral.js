//POO

//Object Literal

const producto = {
    nombre: "Audifonos",
    precio: 500,
};

// Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que se utilizan en un objeto específico
Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
};

const producto2 = new Producto('Monitor de 20"', 800, false);
const producto3 = new Producto("Audifonos", 800, true);
const producto4 = new Producto("Procesador", 3800, true);
const producto5 = new Producto("Mouse", 100, true);

function formatearProducto(producto) {
    return `El producto "${producto.nombre}" tiene un precio de ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3);
// console.log(producto4);
// console.log(producto5);
