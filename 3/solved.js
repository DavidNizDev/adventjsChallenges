const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {

    const pesoPaquete = packOfGifts.join('').length;
    const pesoMaximoRenos = reindeers.join('').length * 2;
    const capacidadTrineo = Math.floor(pesoMaximoRenos / pesoPaquete);


    return console.log(pesoPaquete, pesoMaximoRenos, capacidadTrineo);
}

distributeGifts(packOfGifts, reindeers);
