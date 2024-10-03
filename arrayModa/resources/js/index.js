const calculate=()=>{
    //entrada de datos
    const iTamanio = parseInt(document.getElementById('numero').value);
   
    //salida de datos
    const listaArreglo=document.getElementById('listaArreglo');
    const moda=document.getElementById('moda');

    //arreglo de numeros del tamaño definido por el usuario
    let arregloUno=generadorArregloAleatorio(iTamanio);
    let modaValue=0;
    
    const frecuencias = arregloUno.reduce((acc, num) => {
                            acc[num] = (acc[num] || 0) + 1;
                            return acc; 
    }, {});
    modaValue = Object.entries(frecuencias).sort((a, b) => b[1] - a[1])[0][0];

    obtenerLoMismoConFor(arregloUno)
    //pintamos en pantalla
    listaArreglo.textContent=arregloUno.join(", ");
    moda.textContent=modaValue;
    
    
    
}

const obtenerLoMismoConFor=(arreglo)=>{
    let frecuencias={};
    for (let index = 0; index < arreglo.length; index++) {
        const element = arreglo[index];
        frecuencias[element] = (frecuencias[element] || 0) + 1;
    }
    let moda=null;
    let maxFrecuencia=0;
    for (const numero in frecuencias) {
      if(frecuencias[numero]>maxFrecuencia){
        maxFrecuencia=frecuencias[numero];
        moda=parseInt(numero);
      }
    }
    console.log(arreglo);
    console.log(frecuencias);
    console.log(moda);
}

//genera un arreglo de numeros enteros aleatorios
const generadorArregloAleatorio=(tamanio)=>{
    const limiteSuperior = Math.floor(Math.random() * 100) + 1; 
    return Array.from({ length: tamanio }, () => Math.floor(Math.random() * limiteSuperior));
}