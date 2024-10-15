const conversiones = {
    longitud: {
        "Metro": 1,
        "Kilómetro": 0.001,
        "Centímetro": 100,
        "Pulgada": 39.3701,
        "Pie": 3.28084
    },
    peso: {
        "Kilogramo": 1,
        "Gramo": 1000,
        "Libra": 2.20462,
        "Onza": 35.274
    },
    temperatura: {
        "Celsius": "C",
        "Fahrenheit": "F",
        "Kelvin": "K"
    }
};

function mostrarOpciones() {
    const tipo = document.getElementById('tipoConversion').value;
    const unidadInicio = document.getElementById('unidadInicio');
    const unidadDestino = document.getElementById('unidadDestino');
    unidadInicio.innerHTML = '';
    unidadDestino.innerHTML = '';
    if (tipo === '') return;

    const unidades = conversiones[tipo];
    for (const unidad in unidades) {
        unidadInicio.innerHTML += `<option value="${unidad}">${unidad}</option>`;
        unidadDestino.innerHTML += `<option value="${unidad}">${unidad}</option>`;
    }
}

function convertirUnidad() {
    const tipo = document.getElementById('tipoConversion').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const unidadInicio = document.getElementById('unidadInicio').value;
    const unidadDestino = document.getElementById('unidadDestino').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(cantidad) || unidadInicio === '' || unidadDestino === '') {
        resultado.textContent = 'Por favor, complete todos los campos.';
        return;
    }

    let valorConvertido;

    if (tipo === 'temperatura') {
        valorConvertido = convertirTemperatura(unidadInicio, unidadDestino, cantidad);
    } else {
        const factorInicio = conversiones[tipo][unidadInicio];
        const factorDestino = conversiones[tipo][unidadDestino];
        valorConvertido = (cantidad / factorInicio) * factorDestino;
    }

    resultado.textContent = `${cantidad} ${unidadInicio} son ${valorConvertido.toFixed(2)} ${unidadDestino}`;
}

function convertirTemperatura(unidadInicio, unidadDestino, valor) {
    if (unidadInicio === unidadDestino) return valor;

    let resultado;

    if (unidadInicio === "Celsius") {
        if (unidadDestino === "Fahrenheit") {
            resultado = valor * 9/5 + 32;
        } else if (unidadDestino === "Kelvin") {
            resultado = valor + 273.15;
        }
    } else if (unidadInicio === "Fahrenheit") {
        if (unidadDestino === "Celsius") {
            resultado = (valor - 32) * 5/9;
        } else if (unidadDestino === "Kelvin") {
            resultado = (valor - 32) * 5/9 + 273.15;
        }
    } else if (unidadInicio === "Kelvin") {
        if (unidadDestino === "Celsius") {
            resultado = valor - 273.15;
        } else if (unidadDestino === "Fahrenheit") {
            resultado = (valor - 273.15) * 9/5 + 32;
        }
    }

    return resultado;
}
