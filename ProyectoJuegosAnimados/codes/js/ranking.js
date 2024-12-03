document.addEventListener('DOMContentLoaded', () => {
    const rankingData = [
        { alias: 'Kekielbusn20', kfPoints: 1250, tiempo: '02:15', dificultad: 'Alta' },
        { alias: 'franrodriguezvidal', kfPoints: 1100, tiempo: '03:45', dificultad: 'Media' },
        { alias: 'susanita', kfPoints: 950, tiempo: '04:10', dificultad: 'Baja' },
        { alias: 'SoyGamerPro', kfPoints: 875, tiempo: '05:30', dificultad: 'Alta' },
        { alias: 'El crack', kfPoints: 820, tiempo: '06:00', dificultad: 'Media' },
    ];

    const tableBody = document.querySelector('#rankingTable tbody');

    rankingData.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.alias}</td>
            <td>${item.kfPoints}</td>
            <td>${item.tiempo}</td>
            <td>${item.dificultad}</td>
        `;
        tableBody.appendChild(row);
    });
});
function volverInicio() {
    // Llevar al usuario a la página anterior
    history.back();
}