var date = new Date();
var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

                    console.log(dateString)

//Obviamente la fecha manual se debe cambiar por la fecha_inicio
if (dateString === "2022-10-05"){
    console.log('Arriendo / Pago total')
} else {
    console.log('Reserva / Abona')
}