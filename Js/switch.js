//SWITCH

const pago = "efectivo";
switch (pago) {
    case "tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case "cheque":
        console.log("El usuario pagará con cheque");
        break;
    case "efectivo":
        console.log("Pagaste con efectivo");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}
