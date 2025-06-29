let tiempo = 5; //  usae el 0 para probar el mensaje de error
let limite = 30;
let costo = 0;

if (tiempo === 0) {
    console.log("Error: El tiempo no puede ser cero");
} else {
    while (tiempo < limite) {
        tiempo += 5;
        if (tiempo <= 15) {
            costo += 5 * 0.5;
        } else {
            costo += 5 * 0.3;
        }
        console.log(`Tiempo: ${tiempo} minutos, Costo acumulado: $${costo}`);
    }
    console.log(`Costo total de la entrega: $${costo}`);
}
