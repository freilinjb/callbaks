document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBTN').addEventListener('click', cargarJSON);


function cargarJSON() {
    fetch('empleados.json')
        .then( res => res.json())
        .then(function(data){
            let html = '';

            data.forEach(function(empleado) {
                
                html += `<li> ${empleado.nombre} ${empleado.puesto}</li>`;
            })

            document.getElementById('resultado').innerHTML = html; 
        })
        .catch(error => document.getElementById('resultado').innerHTML = error);
}

function cargarTXT() {
    fetch('datdos.txt')
        .then(res => res.text() ) 

        .then(data => document.getElementById('resultado').innerHTML = data)
        .catch(error => console.log('error'));
}