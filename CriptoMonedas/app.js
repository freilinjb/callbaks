
const cotizador = new Cotizador();
const ui = new Interfaz();
//Event Listener cuando se envia el formulario

function formulario(e) {

    e.preventDefault();

    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    console.log(monedaSeleccionada);

    const criptomonedaSelect = document.getElementById('criptomoneda');
    const criptomonedaleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;

    console.log(criptomonedaleccionada);
    
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
              document.getElementById('formulario').addEventListener("submit", formulario);
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


// const cotizador = new Cotizador()


// const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR";

// // fetch(url, {
// //     method: "GET",
// //     withCredentials: true,
// //     headers: {
// //       "X-Auth-Token": "d02dc5f35f6a6cafbc4e36609f5c3a64ae113271a997fda93b78817b43f077fa",
// //       "Content-Type": "application/json"
// //     }
// //   })

//     fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP,ETH,DASH&tsyms=BTC,USD,EUR&api_key=d02dc5f35f6a6cafbc4e36609f5c3a64ae113271a997fda93b78817b43f077fa")

//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(error => console.log(error));

  