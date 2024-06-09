//Declaracion de variables
var contenido = document.querySelector ('#contenido')
const form = document.getElementById('form');

//Boton para traer datos de la api
function traer() {
    fetch('http://www.raydelto.org/agenda.php')
    .then(res => res.json())
    .then(data => {
        tabla(data)
    })
}

// Tabla de datos
function tabla(data){
    //console.log(datos)
    contenido.innerHTML = ''
    for(let valor of data){
       //console.log(valor)
       contenido.innerHTML += `
       <tr>
            <th>${valor.nombre}</th>
            <th>${valor.apellido}</th>
            <th>${valor.telefono}</th>
        </tr>
       `
    }
} 

//Enviar datos a la api
form.addEventListener ('submit', function(e){
    e.preventDefault();
    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);
        
    console.log([...payload])

    fetch('http://www.raydelto.org/agenda.php',{
        method: "POST",
        body: payload,
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    })

