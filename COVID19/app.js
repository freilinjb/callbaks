document.getElementById('table').addEventListener('click', clickTabla);

function mostrarPais(data) {
    console.log(data);
    document.getElementById('pais').innerText = data.country
    document.getElementById('paisFoto').src  = data.countryInfo["flag"];
    document.getElementById('muertos').innerText = data.deaths;
    document.getElementById('infectados').innerText = data.active;
    document.getElementById('recumerados').innerText = data.recovered;
    document.getElementById('critico').innerText = data.critical;
    document.getElementById('muerteReportada').innerText = + data.todayCases;
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
    document.getElementById('tbody').innerHTML = html;    
}

document.addEventListener("DOMContentLoaded", function() {
  initApp();
});

function clickTabla() {
    var rows = document.getElementsByTagName("td");

    rows.forEach( row => {
      row.onclick = function() {
        let urlx = "https://corona.lmao.ninja/countries/";
        urlx += this.innerText;

        getDatosAsync(urlx)
          .then(data => mostrarPais(data));
      }
    });
}

function modificarCasosGlobales(data) {
  document.getElementById('infectadosGlobales').innerText = data.cases
  document.getElementById('muertosGlobales').innerText = data.deaths;
  document.getElementById('recumeradosGlobales').innerText = data.recovered;
}

async function getDatosAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function procesar() {
  getDatosAsync("https://corona.lmao.ninja/countries/Dominican Republic")
  .then(data => mostrarPais(data))
  .catch(error => console.log(error));

  getDatosAsync('https://coronavirus-19-api.herokuapp.com/all')
    .then(data2 => modificarCasosGlobales(data2));

  getDatosAsync("https://corona.lmao.ninja/countries")
    .then(data3 => mostrarTable(data3));
}

function initApp() {
  procesar();
}