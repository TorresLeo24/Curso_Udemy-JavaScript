// ARREGLOS

// const numeros = [10, 20, 30, 40, 5];
// console.log(numeros);
// console.table(numeros);

// creando arrar con el constructor

// const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
// const meses = ["Enero", "Febrero", "Marzo", "Abril"];
// console.log(meses);
// console.table(meses);

// const arreglo = ["Enero", 10, true, false, 2.5, "null", null, { nombre: "Leonardo", apellido: "Torres" }, [1, 2, 3]]; // Puede tener cualquier tipo de dato
// console.log(arreglo);

// Acceder a una posicion del arreglo
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
/* imprimiendo todos de un solo*/
// numeros.forEach(function (numero) {
//     console.log("\n", numero);
// });

// EXTENSION DE LOS ARREGLOS
// console.log(numeros.length);

// MODIFICAR ARREGLO
// numeros[5] = 60; // No es tan común este
// console.log(numeros); // Agregando uno nuevo, conociendo el index final del arregla

// numeros.push(70); // Agregar elementos al final del arreglo
// numeros.push(80);
// console.log(numeros);

// numeros.unshift(3); //AgregandO elementos al inicio del arreglo

// numeros.pop(); //Eliminado el ultimo elemento del arreglo
// numeros.pop();
// console.table(numeros);
// numeros.shift(); // Eliminar el primer elmento del arreglo
// numeros.shift();
// console.table(numeros);

// // meses.splice(2, 1); //(posicion a ubicarse, elementos a eliminar)
// // console.table(meses); //Recorre el arreglo hasta la posicion asignada
// // // y elimina la cantidad de elementos que se asigno,
// // // a partir de la posicion que se ubicó

// // Rest Operator || Spread Operator

// // const nuevoArreglo = [...meses, "Mayo"]; // Se recomienda este metodo ya que almacena lo que se agrega en un nuevo arreglo
// const nuevoArreglo = ["Mayo", ...meses]; // De esta forma lo agrega al inicio

// console.table(meses);
// console.table(nuevoArreglo);

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
// meses.forEach(function (mes) {
//     if (mes == "Marzo") {
//         console.log("Marzo si existe");
//     }
// });

//includes

let resultado = meses.includes("Marzo"); // Busca si existe marzo
// console.log(resultado);

//SOME, ideal para arreglos de objetos

resultado = carrito.some(function (producto) {
    return producto.nombre == "Audifonos";
});

//Reduce

resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio; //sumando todos los precios
}, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // Sumando todos los precios

console.log(resultado);

// Filter

resultado = carrito.filter(function (producto) {
    return producto.precio != 400;
});
console.log(resultado);
