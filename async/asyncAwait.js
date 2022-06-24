async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            console.log('Hola', nombre)
            resolve(nombre)
        },1000)
    })
}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla')
            resolve(nombre)
        },800 );
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout (function(){
            console.log('Adios', nombre)
            resolve()
        },1500)
    })
}
async function main(){
    let nombre = await hola ('Sebastian')
    await hablar()
    await hablar()
    await hablar()
    await adios (nombre)
}
console.log('Bienvenido')
main()
console.log('Vuelve pronto')