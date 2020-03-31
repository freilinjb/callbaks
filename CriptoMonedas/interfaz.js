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

        const monedaN = document.getElementById("moneda").value;
        const criptomoneda = document.getElementById("criptomoneda").value;

        // const valor = resultado[monedaN.toLowerCase()];
        console.log(monedaN);
        console.log(criptomoneda);
        console.log(resultado[criptomoneda]);
        

        console.log(monedaN);
        console.log(`Resultado criptomoneda: ${resultado[criptomoneda.toUpperCase()]}`);
        console.log(`Resultado moneda: ${resultado[monedaN.toUpperCase()]}`);

        let templateHTML = ` <div class="card cyan bg-info p-2 m-3 shadow">
                                <div class="card-content white-text">
                                    <span class="card-title">Resultado: </span>
                                    <p>El precio de ${monedaN} a moneda ${criptomoneda} es de: $${resultado[criptomoneda][monedaN]}</p>
                                </div>
                            </div>`;
        
        
        document.querySelector("#resultado").innerHTML = templateHTML;
    }
}