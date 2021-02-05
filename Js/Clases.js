// CLASES

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto: ${this.nombre}, tiene un precio de ${this.precio}`;
    }

    salidaPrecio() {
        return `"${this.nombre}" tiene un precio de ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor de 20"', 800);

// HERENCIA
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `El producto: ${this.nombre}, tiene un precio de ${this.precio} y su isbn: ${this.isbn}`;
    }
}

const libro = new Libro("JavaScript", 800, "14454353");
console.log(libro.formatearProducto());

console.log(producto2.formatearProducto());
