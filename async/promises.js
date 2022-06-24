function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            console.log('Hola', nombre)
            resolve(nombre)
        },1000)
    })
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla')
            reject('Error en el hablar')
            // resolve(nombre)
        },800 );
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout (function(){
            console.log('Adios', nombre)
            resolve()
        },1500)
    })
}

// ---------------------------

console.log('Iniciando el proceso')
hola('Sebas')
.then(hablar)
.then(adios)
.then ((nombre)=>{
    console.log('Terminado el proceso')
})
.catch(error=>{
    console.error('Se ha presentado un error');
    console.error(error)
})