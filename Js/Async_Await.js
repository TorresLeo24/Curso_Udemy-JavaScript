//ASync / Await

//Esto es un promise
function descargarNuevosClientes() {
    return new Promise((resolve) => {
        console.log("Descargando clientes... Espere");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 2000);
    });
}

function descargarUltimosPedidos() {
    return new Promise((resolve) => {
        console.log("Descargando pedidos...Espere");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 4000);
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([
            descargarNuevosClientes(),
            descargarUltimosPedidos(),
        ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();

//SetTimeout lo ejecutará una vez a los 5 segundos
// setTimeout(function () {
//     console.log("set Timeout");
// }, 5000);

// SetInterval lo estará ejecutando cada 5 segundos
// setInterval(function () {
//     console.log("set Interval");
// }, 5000);
