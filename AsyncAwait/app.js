async function obtenerCliente() {
    const clientes = new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver('Clientes descargados...');
        }, 2000);
    });

    const error = false;

    if(!error) { 
        const respuesta = await clientes; 
        return respuesta;
    } else {
        await Promise.reject("Hubo un error");
    }
}

obtenerCliente()
    .then(res => console.log(res))
    .catch(error => console.log(error));


console.log('hola mundo');
