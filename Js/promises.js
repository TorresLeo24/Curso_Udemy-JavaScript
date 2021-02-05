//PROMISES

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve("Usuario autenticado"); // EL PROMISE SE CUMPLE
    } else {
        reject("No se pudo iniciar sesion"); //EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then(function (resultado) {
        console.log(resultado);
    })
    .catch(function (error) {
        console.log(error);
    });

usuarioAutenticado /*--------------------------
---*/
    .then((resultado) => console.log(resultado)) /*-------------------
----*/
    .catch((error) => console.log(error));

console.log(usuarioAutenticado);

// En los promise se cumplen 3 valores posibles
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplió
// Reject: Cuando se ha rechazado o no se pudo cumplir

//Para acceder a los valores del promise se utiliza
//.then
//En caso que vaya a ocurrir un error u otro dato que no cumpla
//con lo esperado, se utiliza
//.catch
