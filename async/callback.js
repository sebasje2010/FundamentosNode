function hola(nombre, micallback) {
    setTimeout (function(){
        console.log('hola', nombre)
        micallback(nombre)
    },1000)
}

function adios(nombre, otrocallback) {
    setTimeout (function(){
        console.log('adios', nombre)
        otrocallback(nombre)
    },1500)
}

console.log('Iniciando Proceso')
hola('Sebastian', function (nombre){
    adios (nombre, function(){
        console.log('Terminando Proceso')
    })
})