const reserva = {
  msg: "getReservaCliente id: 220",
  reserva: [
    {
      id_reserva: 220,
      pagado: "1",
      tipoCompra: "1",
    },
  ],
  boletas: [
    {
      tipoPago: "Total",
    },
    {
      tipoPago: "Abono",
    },
  ],
};

var pagototal = reserva.boletas.find((e) => e.tipoPago === "Total");
var abono = reserva.boletas.find((e) => e.tipoPago === "Abono");

//Primero buscamos si existe un pago total, si no existe significa que se pago un abono
if (pagototal && abono) {
    console.log("Pago total encontrado");
} else {
    //Buscar tarifa de la reserva 220
    //Restar la tarifa de la reserva con el abono
    //Enviar al usuario a realizar el pago Total
    console.log('Se debe realizar el pago restante')
}




//   if (reserva.boletas.includes('tipoPago')){
//     console.log('Hola')

//   }
