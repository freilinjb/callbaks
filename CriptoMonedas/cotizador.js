class Cotizador {

    async obtenerMonedasAPI() {
        const urlObtenerMonedas = await fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=d02dc5f35f6a6cafbc4e36609f5c3a64ae113271a997fda93b78817b43f077fa");

        const monedas = await urlObtenerMonedas.json();

        return {
            monedas
        }
    }
}