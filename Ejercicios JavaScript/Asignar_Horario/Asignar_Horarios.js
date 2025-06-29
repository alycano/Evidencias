let dia = 6; // Día de la semana (1 = lunes, ..., 7 = domingo)
let horario; // Aquí se va a guardar el horario base según el día
let intento = 0; // Contador de intentos para ajustar el horario
let maxIntentos = 4; // Máximo de intentos permitidos para ajustar el horario

// Asigno el horario base según el día
switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        horario = 9; // De lunes a viernes, la clase es a las 9:00
        break;
    case 6:
        horario = 11; // Sábado a las 11:00
        break;
    case 7:
        horario = 16; // Domingo a las 16:00
        break;
    default:
        horario = 0; // Si el día no es válido
}

// Muestro el horario base antes de hacer ajustes
console.log(`Horario base para día ${dia}: ${horario}:00`);

// Simulo hasta 4 intentos de ajuste si el horario no es adecuado
while (intento < maxIntentos) {
    let ajustar = intento < 3 ? true : false; // Solo se ajusta en los primeros 3 intentos
    if (!ajustar) break;

    intento++; // Aumento el número de intento
    horario--; // Resto una hora al horario actual
    console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
}

// Si el horario queda antes de las 7:00, muestro un error
if (horario < 7) {
    console.log("Error: Horario demasiado temprano");
} else {
    console.log(`Horario final para la clase: ${horario}:00`);
}


