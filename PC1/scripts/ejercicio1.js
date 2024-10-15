const playersContainer = document.getElementById('players-container');
let playerCount = 2; 

function añadir() {
    playerCount++;
    const newPlayerHTML = `
        <div class="col-md-6 mb-3">
            <h2>Ingrese nombre del jugador ${playerCount}</h2>
            <input type="text" id="name${playerCount}" class="form-control" placeholder="Nombre jugador ${playerCount}">
            <h2>Elija su número</h2>
            <input type="number" id="num${playerCount}" class="form-control" placeholder="Número jugador ${playerCount}">
        </div>
    `;
    playersContainer.insertAdjacentHTML('beforeend', newPlayerHTML);
}

function iniciarbtn() {
    const playerData = [];
    for (let i = 1; i <= playerCount; i++) {
        const name = document.getElementById(`name${i}`).value;
        const num = parseInt(document.getElementById(`num${i}`).value, 10);
        if (name && !isNaN(num)) {
            playerData.push({ name, num });
        }
    }

    if (playerData.length < 2) {
        document.getElementById('ganador').textContent = 'Por favor, ingrese al menos dos jugadores.';
        return;
    }

    const winner = playerData.reduce((prev, current) => (prev.num > current.num ? prev : current));
    document.getElementById('ganador').textContent = `¡El ganador es ${winner.name} con el número ${winner.num}!`;
}
