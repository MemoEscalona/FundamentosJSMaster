const calculate=()=>{
    //entrada de datos
    const iTamanio = parseInt(document.getElementById('numero').value);
   
    //salida de datos
    const listaArregloUno=document.getElementById('listaArregloUno');
    const listaArregloDos=document.getElementById('listaArregloDos')
    const listaArregloOrdenado=document.getElementById('listaArregloOrdenado')
    //arreglo de numeros del tamaño definido por el usuario
    let arregloUno=generadorArregloAleatorio(iTamanio);
    let arregloDos=generadorArregloAleatorio(iTamanio);
    let arregloOrdenado=[...arregloUno,...arregloDos];
    arregloOrdenado.sort(function(a,b){
        return a-b;
    })

    obtenerLoMismoConFor([...arregloUno,...arregloDos])
    //pintamos en pantalla
    listaArregloUno.textContent=arregloUno.join(", ");
    listaArregloDos.textContent=arregloDos.join(", ");
    listaArregloOrdenado.textContent=arregloOrdenado.join(", ");
    
}

const obtenerLoMismoConFor=(arreglo)=>{
    const n = arreglo.length;
    let intercambiado;
    do{
        intercambiado = false;
        for (let i = 0; i < n - 1; i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                [arreglo[i], arreglo[i + 1]] = [arreglo[i + 1], arreglo[i]];
                intercambiado = true; 
            }
        }
    }while(intercambiado);
    console.log(arreglo);
}

//genera un arreglo de numeros enteros aleatorios
const generadorArregloAleatorio=(tamanio)=>{
    const limiteSuperior = Math.floor(Math.random() * 100) + 1; 
    return Array.from({ length: tamanio }, () => Math.floor(Math.random() * limiteSuperior));
}