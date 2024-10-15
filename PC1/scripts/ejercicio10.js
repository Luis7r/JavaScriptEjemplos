document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let moves = 0;

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    function handleCellClick(e) {
        const cell = e.target;
        const index = cell.getAttribute('data-index');

        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            moves++;

            if (checkWin()) {
                alert(`¡El jugador ${currentPlayer} ha ganado!`);
                resetGame();
            } else if (moves === 9) {
                alert('¡Empate!');
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winConditions.some(condition => {
            const [a, b, c] = condition;
            return cells[a].textContent !== '' &&
                   cells[a].textContent === cells[b].textContent &&
                   cells[a].textContent === cells[c].textContent;
        });
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        moves = 0;
    }
});