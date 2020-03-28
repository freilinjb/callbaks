document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBTN').addEventListener('click', cargarJSON);


function cargarJSON() {
    fetch('empleados.json')
        .then(function(res){
            // console.log(res);
            return res.json();
        })
        .then(function(data){
            let html = '';

            data.forEach(function(empleado) {
                
                html += `<li> ${empleado.nombre} ${empleado.puesto}</li>`;
            })

            document.getElementById('resultado').innerHTML = html; 
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById('resultado').innerHTML = error; 

        });
}

function cargarTXT() {
    fetch('datdos.txt')
        .then(function(res) {
            return res.text();
        }) 

        .then(function(data) {
            console.log(data);
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error) {
            console.log('error');
        });
}