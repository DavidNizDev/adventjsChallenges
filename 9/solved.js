function countTime(leds) {
    let time = 0;
    const allLedsOn = () => {
        return leds.every(led => led === 1);
    };
    const simulateChanges = () => {
        const newLeds = [...leds]; // Creamos una copia del array actual de leds
        for (let i = 0; i < leds.length; i++) {
            if (leds[i] === 0) {
                // Si el led está apagado y el led de la izquierda (index - 1) estaba encendido antes
                if (i > 0 && leds[i - 1] === 1) {
                    newLeds[i] = 1; // Encender el led
                }
            } else {
                // Si el led está encendido, se mantiene siempre encendido
                newLeds[i] = 1;
            }
        }
        leds = newLeds; // Actualizamos el array original de leds con los cambios
    };
    while (!allLedsOn()) {
        simulateChanges();
        time += 7;
    }
    return time;
}

// Ejemplos de uso:
console.log(countTime([0, 1, 1, 0, 1])); // Debería imprimir 7
console.log(countTime([0, 0, 0, 1]));    // Debería imprimir 21
console.log(countTime([0, 0, 1, 0, 0])); // Debería imprimir 28
