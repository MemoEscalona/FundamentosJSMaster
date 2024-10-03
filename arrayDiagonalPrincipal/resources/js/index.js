const calculate=()=>{
    //entrada de datos
    const iTamanio = parseInt(document.getElementById('numero').value);
   
    //salida de datos
    const matriz=document.getElementById('matriz');
    const diagonalResultante=document.getElementById('diagonalPrincipal');
    //arreglo de numeros del tamaño definido por el usuario
    let matrizGenerada=generadorMatriz(iTamanio);
    let diagonalPrincipal=[];
    //obtenemos la diagonal
    for (let index = 0; index < iTamanio; index++) {
        diagonalPrincipal.push(matrizGenerada[index][index]);
    }
    //pintamos en pantalla
    matriz.innerHTML=pintarMatriz(matrizGenerada);
    diagonalResultante.innerText=diagonalPrincipal.join(", ");
    
}

const pintarMatriz=(matriz)=>{
    let output = "<table border='1' cellpadding='10'>";
      for (let i = 0; i < matriz.length; i++) {
        output += "<tr>";
        for (let j = 0; j < matriz[i].length; j++) {
          output += `<td>${matriz[i][j]}</td>`;
        }
        output += "</tr>";
      }
    output += "</table>";
    return output;
}
//genera un arreglo de numeros enteros aleatorios
const generadorMatriz=(tamanio)=>{
    let matriz = [];
    const limiteSuperior = Math.floor(Math.random() * 100) + 1; 
    //return Array.from({ length: tamanio }, () => Math.floor(Math.random() * limiteSuperior));
    for (let i = 0; i < tamanio; i++) {
        let fila = [];
        for (let j = 0; j < tamanio; j++) {
            fila.push(Math.floor(Math.random() * limiteSuperior)); 
        }
        matriz.push(fila);
    }
    return matriz;
}