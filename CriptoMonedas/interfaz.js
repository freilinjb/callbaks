class Interfaz {
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                const arregloMonedas = monedas.monedas.Data;
                console.log(arregloMonedas);
                
                const select = document.getElementById('croptomoneda');
                //construir SELECT desde la REST API

                arregloMonedas.forEach(moneda => {
                    //Añadir el ID y el valor despues asignarlo al select 
                    const option = document.createElement('option');
                    option.value = moneda.CoinInfo.Name;
                    option.appendChild(document.createTextNode(moneda.CoinInfo.FullName));

                    select.appendChild(option);
                });                
            })
            .catch(error => console.log('Error al cargar los datos SELECT criptomonedas'));
    }
}