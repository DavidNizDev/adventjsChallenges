function wrapping(gifts) {

    let resultado = [];
    for (let gift in gifts) {
        const tapa = '*'.repeat(gifts[gift].length + 2);
        resultado.push(
            `${tapa}\n*${gifts[gift]}*\n${tapa}`
        );
    }
    return resultado;
}
