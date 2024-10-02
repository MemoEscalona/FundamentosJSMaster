const calculate=()=>{
    //entrada de datos
    const iTamanio = parseInt(document.getElementById('numero').value);
    //salida de datos
    const listaNumeros=document.getElementById('listaNumeros');
    const numMayor=document.getElementById('numeroMayor');
    const numMenor=document.getElementById('numeroMenor');
    const numMedia=document.getElementById('media');
    //arreglo de numeros del tamaño definido por el usuario
    let arregloNumeros=generadorArregloAleatorio(iTamanio);
    //obtenemos el numero mayor
    let numeroMayor=Math.max(...arregloNumeros);
    //obtenemos el numero menor
    let numeroMenor=Math.min(...arregloNumeros);
    //obtenemos el promedio o media aritemetica
    let suma = arregloNumeros.reduce((acumulador, valor) => acumulador + valor, 0);
    let media= suma/arregloNumeros.length;
    obtenerLoMismoConFor(arregloNumeros)
    //pintamos en pantalla
    listaNumeros.textContent=arregloNumeros.join(", ");
    numMayor.textContent=`El numero mayor es ${numeroMayor} `;
    numMenor.textContent=`El numero menor es ${numeroMenor} `;
    numMedia.textContent=`La media es ${media} `;

}

const obtenerLoMismoConFor=(array)=>{
    let minimo=undefined;
    let mayor=0;
    let suma=0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(minimo==undefined||element<minimo){
            minimo=element
        }
        if(element>mayor){
            mayor=element;
        }
        suma=suma+element;
    }
    console.log("El valo minimo es:"+minimo)
    console.log("El valo minimo es:"+mayor)
    console.log("El valo media es:"+(suma/array.length))
}

//genera un arreglo de numeros enteros aleatorios
const generadorArregloAleatorio=(tamanio)=>{
    const limiteSuperior = Math.floor(Math.random() * 100) + 1; 
    return Array.from({ length: tamanio }, () => Math.floor(Math.random() * limiteSuperior));
}