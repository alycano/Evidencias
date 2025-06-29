let costoTotal = 0; // Aquí acumulo el costo total de electricidad

// Simulo 5 días de consumo eléctrico
for (let dia = 1; dia <= 5; dia++) {
    // Genero un número aleatorio entre 1 y 10 para simular el consumo diario (en kWh)
    let consumo = Math.floor(Math.random() * 10) + 1;

    // Si consumo más de 5 kWh, el costo es $3, si no, $1.5
    let costoDiario = consumo > 5 ? 3 : 1.5;

    // Sumo el costo del día al total acumulado
    costoTotal += costoDiario;

    // Muestro el consumo y el costo de ese día
    console.log(`Día ${dia}: Consumo ${consumo} kWh, Costo: $${costoDiario}, Total acumulado: $${costoTotal}`);

    // Si el costo total supera $12, detengo el monitoreo
    if (costoTotal > 12) {
        console.log("Costo total superó $12, deteniendo el monitoreo");
        break;
    }
}

// Al final muestro cuánto fue el costo total de electricidad
console.log(`Costo total final: $${costoTotal}`);

