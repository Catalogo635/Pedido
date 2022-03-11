const evento = document.getElementById('send')
const enviarFormulario = () => {
    let nombre = document.getElementById('nombres').value;
    let direccion = document.getElementById('Direccion').value;
    let apellido = document.getElementById('apellidos').value;
    let ruc = document.getElementById('RUC').value;
    let mensaje = document.getElementById('mensaje').value;
    let numero = 593969913261;
    var win = window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}%20de%20la%20ferreteria%20${apellido}%20mi%20direccion%20es%20${direccion}%20con%20RUC%20${ruc},Requiero%20de:%20${mensaje}`, '_blank');
}
evento.addEventListener('click', enviarFormulario)