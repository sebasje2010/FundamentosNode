function hola(nombre, micallback) {
    setTimeout (function(){
        console.log('Hola', nombre)
        micallback(nombre)
    },1000)
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('bla bla bla')
        callbackHablar()
    },800 );
}

function adios(nombre, otrocallback) {
    setTimeout (function(){
        console.log('Adios', nombre)
        otrocallback()
    },1500)
}

function conversacion (nombre,veces,callback){
    if (veces>0){
        hablar(function(){
            conversacion(nombre, --veces, function(){
                console.log('Proceso terminado')
            })
        })
    }
    else{
        adios(nombre,callback)
    }
}
// 

console.log('Iniciando Proceso')
hola('Sebastian', function (nombre){
    conversacion (nombre, 3, adios)
})




//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 hablar(function(){
//                     adios (nombre, function(){
//                     console.log('Terminando Proceso')
//                 })
//             })
//         })
//     })
// })
// })