

const esperando = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('Se ejecuto');
    }, 5000);
});


/*then va a esperar que resolver se ejecute 
(siempre tienes que crear el then para que llame al resolver)*/

esperando.then(function(mensaje) {
    console.log(mensaje);
});   

const aplicarDescuento = new Promise(function(resolve, reject) {
    const descuento = false;

    if(descuento) {
        resolve('Descuento Aplicado');

    } else {
        reject('No se puede aplicar el descuento');
    }


});
aplicarDescuento.then(function(resultado) {
    console.log(resultado);
     
}).catch(function(error){
    console.log(error);
});