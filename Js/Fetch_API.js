{
    function obtenerEmpleados() {
        const archivo = "empleados.json";
        fetch(archivo)
            .then((resultado) => resultado.json())
            .then((datos) => {
                // console.log(resultado);
                const { empleados } = datos;
                // console.log(datos);

                empleados.forEach((empleado) => {
                    console.log(empleado);
                });
            });
    }
}

// async function obtenerEmpleados() {
//     const archivo = "empleados.json";
//     const resultado = await fetch(archivo);
//     const datos = await resultado.json();
//     console.log(datos);
// }
obtenerEmpleados();
