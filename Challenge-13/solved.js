const lastBackup = 1546300800;
const changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
];

function getFilesToBackup(lastBackup, changes) {

    let filter = [...changes].filter(c => c[1] > lastBackup);
    let map = filter.map(c => c[0]);
    let sort = map.sort((a, b) => a - b);
    return ([...new Set(sort)]);
    /*     return [
            ...new Set(
                changes
                    .filter(c => c[1] > lastBackup)
                    .map(c => c[0])
                    .sort((a, b) => a - b)
            )
        ] */
}

console.log(getFilesToBackup(lastBackup, changes));