let i=0
let intervalo=setInterval(()=>{
    console.log('Hola')
    if (i===3){
        clearInterval(intervalo)
    }
    i++
},1000)
