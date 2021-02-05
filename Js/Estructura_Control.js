// ESTRUCTURA DE CONTROL
// const puntaje = 1000;
// if (puntaje !== 1000) {
//     console.log("El puntaje es 1000");
// } else {
//     console.log("No es igual");
// }

// const efectivo = 2000;
// const carrito = 800;

// if (efectivo > carrito) {
//     console.log("El usuario puede pagar");
// } else {
//     console.log("El efectivo no es suficiente");
// }

const rol = "Administrador";
if (rol === "Administrador") {
    console.log("Acceso a todo el sistema");
} else if (rol === "Editor") {
    console.log("No puedes crear archivos, pero si visualizarlos");
} else {
    console.log("No tienes acceso");
}
