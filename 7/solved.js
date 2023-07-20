const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc', 'tubieja']

function getGiftsToRefill(a1, a2, a3) {
    const combinedArrays = a1.concat(a2).concat(a3);
    const set = [...new Set(combinedArrays)];
    const filtro = set.filter(i => a1.includes(i) + a2.includes(i) + a3.includes(i) === 1);
    console.log(filtro);
    // return console.log([...new Set(a1.concat(a2).concat(a3))]
    // .filter(i => a1.includes(i) + a2.includes(i) + a3.includes(i) === 1));

}

getGiftsToRefill(a1, a2, a3);