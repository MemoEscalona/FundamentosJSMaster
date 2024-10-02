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
    //pintamos en pantalla
    listaNumeros.textContent=arregloNumeros.join(", ");
    numMayor.textContent=`El numero mayor es ${numeroMayor} `;
    numMenor.textContent=`El numero menor es ${numeroMenor} `;
    numMedia.textContent=`La media es ${media} `;

}

//genera un arreglo de numeros enteros aleatorios
const generadorArregloAleatorio=(tamanio)=>{
    const limiteSuperior = Math.floor(Math.random() * 100) + 1; 
    return Array.from({ length: tamanio }, () => Math.floor(Math.random() * limiteSuperior));
}