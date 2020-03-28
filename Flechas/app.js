let aprendiendo;

aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

 aprendiendo = () => {
    console.log('Aprendiendo JavaScript2');
 }
aprendiendo = () => console.log('Aprendiendo JavaScript2');
aprendiendo = () => 'Aprendiendo JavaScript2';

aprendiendo = () => ({
    aprendiendo: 'Aprendiendo Javas'
});

aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo = (tec1,tec2) => console.log(`Aprendiendo ${tec2} y ${tec1}`);

aprendiendo('EMSC6', 'Jascript'); 


const productos = ['Disco', 'Camisa', 'Guitarra'];


//Callback con un funcion 
// const letrasProducto = productos.map(function(producto) {
//     return producto.length;
// });

const  letrasProducto = productos.map( producto => producto.length);

productos.forEach(function(producto){ 
    console.log(producto);
    
});

productos.forEach

productos.forEach( producto => console.log(producto));

console.log(letrasProducto);

