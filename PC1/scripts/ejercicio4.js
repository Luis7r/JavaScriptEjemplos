// Tasas de cambio predefinidas
const tasasCambio = {
    'Sol Peruano': { 'Sol Peruano': 1, 'Dolar Estadounidense': 0.26, 'Euro': 0.24, 'Peso Colombiano': 1.03, 'Peso Argentino': 0.38 },
    'Dolar Estadounidense': { 'Sol Peruano': 3.70, 'Dolar Estadounidense': 1, 'Euro': 0.89, 'Peso Colombiano': 3.85, 'Peso Argentino': 1.41 },
    'Euro': { 'Sol Peruano': 4.12, 'Dolar Estadounidense': 1.12, 'Euro': 1, 'Peso Colombiano': 4.31, 'Peso Argentino': 1.59 },
    'Peso Colombiano': { 'Sol Peruano': 0.97, 'Dolar Estadounidense': 0.26, 'Euro': 0.23, 'Peso Colombiano': 1, 'Peso Argentino': 0.37 },
    'Peso Argentino': { 'Sol Peruano': 2.63, 'Dolar Estadounidense': 0.71, 'Euro': 0.63, 'Peso Colombiano': 2.71, 'Peso Argentino': 1 }
};

function cambioMoneda() {
    // Obtener valores de entrada
    const tipoMonedaInicio = document.getElementById('tipoMonedaInicio').value;
    const tipoMonedaCambio = document.getElementById('tipoMonedaCambio').value;
    const dineroInicial = parseFloat(document.getElementById('dineroInicial').value);

    // Validar entradas
    if (isNaN(dineroInicial) || dineroInicial <= 0) {
        alert('Por favor, ingrese un monto inicial válido.');
        return;
    }
    if (tipoMonedaInicio === tipoMonedaCambio) {
        alert('La moneda de origen y la de destino deben ser diferentes.');
        return;
    }

    // Realizar el cambio
    const tasa = tasasCambio[tipoMonedaInicio][tipoMonedaCambio];
    const montoFinal = dineroInicial * tasa;

    // Mostrar los resultados
    document.getElementById('dineroI').value = dineroInicial.toFixed(2);
    document.getElementById('monedaI').value = tipoMonedaInicio;
    document.getElementById('monedaC').value = tipoMonedaCambio;
    document.getElementById('montoFinal').value = montoFinal.toFixed(2);
}
