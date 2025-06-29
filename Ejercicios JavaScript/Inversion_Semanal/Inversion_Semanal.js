let inversion = 100; // Inversión inicial
let dia = 1;

do {
    // Determinar ganancia adicional: $10 si múltiplo de 3, $5 si no
    let gananciaAdicional = dia % 3 === 0 ? 10 : 5;

    // Ganancia base diaria es $10
    let gananciaDia = 10 + gananciaAdicional;

    // Sumar al total de la inversión
    inversion += gananciaDia;

    // Mostrar información del día
    console.log(`Día ${dia}: Ganancia de $${gananciaDia}, Total: $${inversion}`);

    // Verificar si se supera el límite
    if (inversion > 200) {
        console.log("Inversión superó $200, deteniendo el proceso");
        break;
    }

    dia++; // Avanzar al siguiente día
} while (dia <= 14);

// Mostrar resultado final
console.log(`Inversión total: $${inversion}`);

