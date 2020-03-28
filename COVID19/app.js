const formulario = document.getElementById("cobid-19");
let dd;

function mostrarPais(data) {
    document.getElementById('pais').innerText = data.country
    document.getElementById('paisFoto').src  = data.countryInfo["flag"];
    document.getElementById('muertos').innerText = data.deaths;
    document.getElementById('infectados').innerText = data.active;
    document.getElementById('recumerados').innerText = data.recovered;
    document.getElementById('critico').innerText = data.critical;
    document.getElementById('muerteReportada').innerText = + data.todayCases;
    console.log(data);
    
}

function mostrarTable(data) {
    let html = '';
    data.forEach(function(pais) {
        html += `<tr>
                    <th scope="row">${pais.countryInfo['_id']}</th>
                    <td>${pais.country}</td>
                    <td>${pais.recovered}</td>
                    <td>${pais.deaths}</td>
                    <td>${pais.cases}</td>
                    <td>${pais.active}</td>
                </tr>`; 
    });
    dd = data;
    document.getElementById('tbody').innerHTML = html;    
}


function cargarInfeccion(url = "https://corona.lmao.ninja/countries") {

    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        mostrarTable(data);        
      })
      .catch(function(error) {
          console.log(error);
      });
    
  }

document.addEventListener("DOMContentLoaded", function() {
  initApp();
});

function initApp() {
    cargarInfeccion();
    Arranca();
    casosGlobales();
}
//*///

function clickTabla() {
    let x = '';

    var rows = document.getElementsByTagName("td");
    for (var i = 0; i < rows.length; i++)
    {
        rows[i].onclick = function() {

            var urlx = 'https://corona.lmao.ninja/countries/';
            urlx += this.innerText;


            fetch(urlx)
            .then(function(res) {
              return res.json();
            })
            .then(function(data) {
              mostrarPais(data);        
            })
            .catch(function(error) {
                console.log(error);
            });


        }

    }
    

    // urlx = urlx.concat('https://corona.lmao.ninja/countries/' + urlx;


}

function Arranca() {
    let x = '';

    var urlx = 'https://corona.lmao.ninja/countries/Dominican Republic';


    fetch(urlx)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      mostrarPais(data);        
    })
    .catch(function(error) {
        console.log(error);
    });


}

function casosGlobales() {
  let x = '';

  var urlx = 'https://coronavirus-19-api.herokuapp.com/all';


  fetch(urlx)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    modificarCasosGlobales(data);        
  })
  .catch(function(error) {
      console.log(error);
  });
}

function modificarCasosGlobales(data) {
  document.getElementById('infectadosGlobales').innerText = data.cases
  document.getElementById('muertosGlobales').innerText = data.deaths;
  document.getElementById('recumeradosGlobales').innerText = data.recovered;
}


document.getElementById('table').addEventListener('click', clickTabla);

