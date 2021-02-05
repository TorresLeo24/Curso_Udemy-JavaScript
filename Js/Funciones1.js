//
// function sumar(numero1 = 0, numero2 = 0) {
//     // Parámetros // Parametros por default
//     console.log(numero1 + numero2);
// }
// sumar(10, 10);
// sumar(4, 5);
// sumar(6, 8);
// sumar(385, 129);

// // EXPRESION DE LA FUNCION
// const suma1 = function (numero1, numero2) {
//     console.log(numero1 + numero2);
// };
// suma1(7, 6); // Mandarlo a imprimir con este tipo de funcion solo puede
// //estar despues de haber hecho la funcion

// function sumar(n1, n2) {
//     return n1 + n2;
// }
// const resultado = sumar(2, 5);
// console.log(resultado);

// let total = 0;
// function agregarCarrito(precio) {
//     return (total += precio);
// }

// function CalcImpuesto(total) {
//     return total * 1.15;
// }

// total = agregarCarrito(200);
// total = agregarCarrito(200);
// total = agregarCarrito(200);

// console.log(total);
// const impuesto = CalcImpuesto(total);
// console.log(`Total = ${total}, Total+IVA = ${impuesto}`);

// METODOS DE PROPIEDAD
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Canción con el ID ${id}`);
    },
    pausar: function () {
        console.log("Pausando...");
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist ${nombre}`);
    },
    reproduciendo: function (nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    },
};

reproductor.Eliminar = function (id) {
    console.log(`Elimanar la cancion ${id}`);
};

reproductor.reproducir(3500);
reproductor.pausar();
reproductor.Eliminar(20);
reproductor.crearPlaylist('"Bachata"');
reproductor.reproduciendo('"Bachata"');
