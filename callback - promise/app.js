class Callback {
  procesar() {
    const ciudades = ["Londrez", "New York", "Matrid", "Pares", "Viena"];

    //inline callback
    // ciudades.forEach(function(ciudad) {
    //     console.log(ciudad);

    // });

    //con funcion definida
    function callbac(ciudad) {
      console.log(ciudad);
    }

    ciudades.forEach(callbac);
  }
}

const paises = ['Francia', 'España','Portugal','Australia','Inglaterra', 'Irlanda'];

//Se agrega un pais despues de 2 segundo
function nuevoPais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises2() {
    setTimeout(() => {
        let html = '';
        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

//Los paises se muestran despues de 1 segundo
function mostrarPaises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`;
        });
        console.log(`${html}`);
        document.getElementById('app').innerHTML = html;
    }, 1000);
}



nuevoPais('Alemania' , mostrarPaises2); 

mostrarPaises();
