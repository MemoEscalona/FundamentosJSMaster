const calculate=()=>{
    //entrada de datos
    const iTamanio = parseInt(document.getElementById('numero').value);
   
    //salida de datos
    const listaArregloUno=document.getElementById('listaArregloUno');
    const listaArregloDos=document.getElementById('listaArregloDos');
    const listaArregloResultante=document.getElementById('listaArregloResultante');
  

    //arreglo de numeros del tamaño definido por el usuario
    let arregloUno=generadorArregloAleatorio(iTamanio);
    let arregloDos=generadorArregloAleatorio(iTamanio);
    let arregloResultante=[];
    //ordenar de menor a mayor
    arregloUno.sort(function(a,b){return a-b;});
    arregloDos.sort(function(a,b){return a-b;});
    for (let index = 0; index < arregloUno.length; index++) {
      const elementoUno = arregloUno[index];
      const elementoDos = arregloDos[index];
      const nuevoElemento=elementoUno>elementoDos?elementoDos:elementoUno;
      arregloResultante.push(nuevoElemento);
    }
    //pintamos en pantalla
    listaArregloUno.textContent=arregloUno.join(", ");
    listaArregloDos.textContent=arregloDos.join(", ");
    listaArregloResultante.textContent=arregloResultante.join(", ");
    
}


//genera un arreglo de numeros enteros aleatorios
const generadorArregloAleatorio=(tamanio)=>{
    const limiteSuperior = Math.floor(Math.random() * 100) + 1; 
    return Array.from({ length: tamanio }, () => Math.floor(Math.random() * limiteSuperior));
}