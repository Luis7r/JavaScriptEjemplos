function generarCodigo() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const añoIngreso = document.getElementById('añoIngreso').value.trim();
    
    // Validar que los campos no estén vacíos
    if (nombre === '' || apellido === '' || añoIngreso === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Obtener los últimos dos dígitos del año de ingreso
    const añoIngresoUltimos2 = añoIngreso.slice(-2);
    
    // Generar el código de estudiante
    const primeraLetraNombre = nombre.charAt(0).toUpperCase();
    const primeraLetraApellido = apellido.charAt(0).toUpperCase();
    const numerosAleatorios = Math.floor(Math.random() * 1000000).toString().padStart(6, '0'); // 6 dígitos aleatorios

    // Extraer los últimos dos dígitos del año y 4 dígitos aleatorios
    const codigoEstudiante = `U${primeraLetraNombre}${primeraLetraApellido}${añoIngresoUltimos2}${numerosAleatorios.slice(0, 4)}`;
    
    // Formar el correo electrónico
    const correoElectronico = `${codigoEstudiante}@utp.edu.pe`;

    // Mostrar el resultado
    document.getElementById('result').textContent = `Código de estudiante: ${codigoEstudiante} \n Correo electrónico: ${correoElectronico}`;
}
