let tiempoTotal = 240;
let tiempoRestante = tiempoTotal;
let ciclo = 0;

for (let tiempo = 0; tiempo < tiempoTotal; tiempo += 50) {
    ciclo++;
    if (ciclo % 2 === 1) {
        // Ciclo impar: Trabajo
        tiempoRestante -= 50;
        console.log(`Ciclo ${Math.ceil(ciclo / 2)}: Trabajar 50 minutos, Tiempo restante: ${tiempoRestante} minutos`);
    } else {
        // Ciclo par: Pausa
        let numeroPausa = ciclo / 2;
        let pausa = numeroPausa <= 3 ? 10 : 20;
        tiempoRestante -= pausa;
        console.log(`Ciclo ${numeroPausa}: Pausa de ${pausa} minutos, Tiempo restante: ${tiempoRestante} minutos`);
    }
}
