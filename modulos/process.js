// const process =require('process');

process.on('beforeExit',()=>{
    console.log('El proceso va a terminar')
})

process.on('exit',()=>{
    console.log('El proceso ha terminado')
    setTimeout(()=>{
        console.log('Esto no se va a ver aunque el timeout este en 0 porque ya está desconectado el proceso')
    },0)
})
setTimeout(()=>{
    console.log('Esto se va a ver')
},500)

process.on('uncaughtException',(err,origen)=>{
    console.log('Se nos olvidó capturar un error')
    console.error(err)
})

// functioninexistente()