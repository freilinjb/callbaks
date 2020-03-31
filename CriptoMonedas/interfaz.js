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
                // console.log(arregloMonedas);
                
                const select = document.getElementById('criptomoneda');
                //construir SELECT desde la REST API
                console.log(arregloMonedas);
                
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
    mostrarMensaje(mensaje, clases) {
        console.log(`Mensaje: ${mensaje}`);
        console.log(`clases: ${clases}`);
        
        const div = document.createElement("div");
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        //Div para crear mensaj para html

        const divMensaje = document.querySelector(".mensajes");
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector(".mensajes div").remove();
        }, 2000);
    }

    mostrarResultado(resultado, moneda) {

    }
}