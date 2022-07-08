function asincrona(callback){
    setTimeout(() => {
       try {
        let a=3+z
        callback(null, a)
       } 
       catch(e){
        callback(e, null)
       }
    }, 1000);
}

asincrona((err,dato)=>{
    if (err){
        console.error('Se ha presentado un error')
        console.error(err)
        return false
        // throw err //No va a funcionar porque esto es asincrono
    }
    console.log('todo bien, el dato es ', dato)
})