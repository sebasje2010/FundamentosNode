console.time('todo')
let suma1=0
console.time('bucle')
for(let i=0;i<100000000; i++){
    suma1+=1
}
console.timeEnd('bucle')

let suma2=0
console.time('bucle2')
for(let j=0;j<1000000000; j++){
    suma2+=1
}
console.timeEnd('bucle2')

console.time('asincrono')
console.log('empieza el proceso asincrono')
asincrono()
.then(()=>{
    console.timeEnd('asincrono')
})

console.timeEnd( 'todo')
function asincrono(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Termina el proceso Asincrono')
            resolve()
        }, 0);
    })
}