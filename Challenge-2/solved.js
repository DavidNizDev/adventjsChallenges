function countHours(year, holidays) {
    let horas = 0;

    holidays.map(dias => {
        let mes = dias.split('/')[0] - 1;
        let dia = dias.split('/')[1];
        let fecha = new Date(year, mes, dia).getDay();

        if (fecha != 0 & fecha != 6) {
            horas += 2;
        }
    })

    return horas;
}
