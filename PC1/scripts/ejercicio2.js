function llamarObjeto() {
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastname').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const edad = document.getElementById('edad').value;
    const fecha = new Date(fechaNacimiento);
    if (isNaN(fecha.getTime())) {
        alert("Fecha de nacimiento inválida. Usa el formato YYYY-MM-DD.");
        return;
    }
    const signoZodiacal = obtenerSignoZodiacal(fecha);
    const persona = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        edad: edad,
        signoZodiacal: signoZodiacal
    };

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <strong>OBJETO PERSONA</strong><br>
        Nombre: ${persona.nombre} <br>
        Apellido: ${persona.apellido}<br>
        Edad: ${persona.edad}<br>
        Fecha de Nacimiento: ${persona.fechaNacimiento}<br>
        Signo Zodiacal: ${persona.signoZodiacal}
    `;
}

function obtenerSignoZodiacal(fecha) {
    const dia = fecha.getUTCDate();
    const mes = fecha.getUTCMonth() + 1;

    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Acuario";
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Piscis";
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Tauro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Géminis";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Cáncer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leo";
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgo";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "Escorpio";
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "Sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "Capricornio";

    return "No se puede determinar";
}
