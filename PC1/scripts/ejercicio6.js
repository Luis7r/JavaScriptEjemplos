let saldo = 1000;

function realizarApuesta() {
    const monto = parseFloat(document.getElementById('montoApuesta').value);
    const multiplicador = parseFloat(document.getElementById('tipoApuesta').value);

    if (monto < 10 || isNaN(monto)) {
        alert("El monto mínimo de apuesta es 10.");
        return;
    }

    if (monto > saldo) {
        alert("No tienes suficiente saldo.");
        return;
    }

    const resultado = Math.random() < 0.5 ? 'ganar' : 'perder';
    const ganancia = resultado === 'ganar' ? monto * multiplicador : -monto;
    saldo += ganancia;

    // Actualizar saldo
    document.getElementById('saldo').innerText = saldo.toFixed(2);

    // Actualizar resultado
    const mensajeResultado = resultado === 'ganar' 
        ? `¡Felicidades! Ganaste ${ganancia.toFixed(2)} con una apuesta de ${monto}.` 
        : `Lo siento, perdiste ${monto}.`;
    document.getElementById('resultado').innerText = mensajeResultado;

    // Actualizar historial
    const historial = document.getElementById('historial');
    const nuevaApuesta = document.createElement('li');
    nuevaApuesta.classList.add('list-group-item');
    nuevaApuesta.textContent = `Apostaste ${monto}, Resultado: ${resultado.toUpperCase()}, Ganancia: ${ganancia.toFixed(2)}`;
    historial.appendChild(nuevaApuesta);

    // Limpiar input
    document.getElementById('montoApuesta').value = '';
}