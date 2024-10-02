const calculate=()=>{
    //entrada de datos
    const iTamanio = parseInt(document.getElementById('numero').value);
    const sNumerosRepetibles = document.getElementById('numeroRepetibles').value;
    const iVeces = parseInt(document.getElementById('veces').value);
    //salida de datos
    const listaNumeros=document.getElementById('listaNumeros');
    const listaUnicos=document.getElementById('listaNumerosUnicos');
    //arreglo de numeros del tamaño definido por el usuario
    let arregloNumeros=generadorArregloAleatorio(iTamanio,sNumerosRepetibles,iVeces);
    let arregloUnicos=[... new Set(arregloNumeros)];
    obtenerLoMismoConFor(arregloNumeros)
    //pintamos en pantalla
    listaNumeros.textContent=arregloNumeros.join(", ");
    listaUnicos.textContent=arregloUnicos.join(", ");
    
}

const obtenerLoMismoConFor=(array)=>{
    const arrayUnico=[];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(arrayUnico.includes(element)==false){
            arrayUnico.push(element)
        }
    }
    console.log(array)
    console.log(arrayUnico)
}

//genera un arreglo de numeros enteros aleatorios, forzando la repeticion de algunos
const generadorArregloAleatorio=(tamanio, numeros, cantidadPorNumero)=>{
    const arreglo=[];
    const numerosRepetidos=numeros.split(",");
    const limiteSuperior = Math.floor(Math.random() * 100) + 1; 
    numerosRepetidos.forEach(numero=>{
        for(let i=0;i<cantidadPorNumero;i++){
            arreglo.push(parseInt(numero))
        }
    })
    while(arreglo.length<tamanio){
        arreglo.push(Math.floor(Math.random() * limiteSuperior))
    }
    return arreglo;
}