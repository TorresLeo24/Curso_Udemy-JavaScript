// THIS

const reservacion = {
    nombre: "Leo",
    Apellido: "Torres",
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    },
};

const reservacion1 = {
    nombre: "Kathryn",
    Apellido: "Gaitán",
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    },
};
console.log(reservacion.nombre);
reservacion.informacion();
reservacion1.informacion();

// Si se utilizara la funcion de manera "Arrow function", se debe de declarar de manera global
// todos los valores que se quieran mandar a mostrar
