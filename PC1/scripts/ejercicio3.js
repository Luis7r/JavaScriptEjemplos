let tareas = [];

function agregarTarea() {
    const actividad = document.getElementById('actividad').value.trim();
    const dia = document.getElementById('dia').value;
    const hora = document.getElementById('hora').value.trim();
    const minutos = document.getElementById('minutos').value.trim();

    // Validar que los campos no estén vacíos
    if (actividad === '' || dia === '' || hora === '' || minutos === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear un objeto de tarea
    const tarea = {
        actividad: actividad,
        dia: dia,
        hora: parseInt(hora, 10),
        minutos: parseInt(minutos, 10),
        nombreDia: obtenerNombreDia(dia),
        horaCompleta: parseInt(hora, 10) * 60 + parseInt(minutos, 10), // minutos desde medianoche
        finalizada: false // Nueva propiedad para estado de la tarea
    };

    // Añadir la tarea al array
    tareas.push(tarea);

    // Ordenar el array por día, hora y minutos
    tareas.sort((a, b) => {
        if (a.dia !== b.dia) {
            return a.dia - b.dia;
        }
        return a.horaCompleta - b.horaCompleta;
    });

    // Actualizar la lista en el DOM
    mostrarTareas();

    // Limpiar los campos de entrada
    document.getElementById('actividad').value = '';
    document.getElementById('dia').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('minutos').value = '';
}

function mostrarTareas() {
    const organizador = document.getElementById('Organizador');
    organizador.innerHTML = ''; // Limpiar la lista existente

    tareas.forEach((tarea, index) => {
        const tareaElemento = document.createElement('li');
        tareaElemento.className = 'list-group-item';
        tareaElemento.textContent = `Hora: ${tarea.hora}:${tarea.minutos} - Día: ${tarea.nombreDia} - Actividad: ${tarea.actividad} \n\n`;

        // Cambiar el color de fondo si la tarea está finalizada
        if (tarea.finalizada) {
            tareaElemento.style.backgroundColor = 'lightgreen';
        }

        // Crear el botón "Tarea Finalizada"
        const botonFinalizada = document.createElement('button');
        botonFinalizada.textContent = 'Tarea Finalizada';
        botonFinalizada.className = 'btn btn-success btn-sm'; // Puedes cambiar el estilo según lo necesites
        botonFinalizada.addEventListener('click', () => marcarComoFinalizada(index));

        // Crear el botón "Eliminar Tarea"
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn btn-danger btn-sm'; // Puedes cambiar el estilo según lo necesites
        botonEliminar.addEventListener('click', () => eliminarTarea(index));

        // Añadir los botones al elemento de la tarea
        tareaElemento.appendChild(botonFinalizada);
        tareaElemento.appendChild(botonEliminar);
        
        // Añadir el elemento de la tarea a la lista
        organizador.appendChild(tareaElemento);
    });
}

function marcarComoFinalizada(index) {
    // Cambiar el estado de la tarea a finalizada
    tareas[index].finalizada = true;
    // Actualizar la lista en el DOM
    mostrarTareas();
}

function eliminarTarea(index) {
    // Eliminar la tarea del array
    tareas.splice(index, 1);
    // Actualizar la lista en el DOM
    mostrarTareas();
}

function obtenerNombreDia(dia) {
    switch (dia) {
        case '01': return 'Lunes';
        case '02': return 'Martes';
        case '03': return 'Miércoles';
        case '04': return 'Jueves';
        case '05': return 'Viernes';
        case '06': return 'Sábado';
        case '07': return 'Domingo';
        default: return 'Desconocido';
    }
}
