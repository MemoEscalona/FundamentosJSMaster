const button= document.getElementById('button')
const triggerRequest= async ()=>{
    //entrada de datos
    const url = document.getElementById('url').value;
    button.disabled=true;
    button.innerText="Procesando..."
    //realizar peticion
    const request=await fetch(url)
    const jsonData= await request.json();
    pintarResultado(jsonData)
    button.disabled=false;
    button.innerText='Realizar petición y pintar'
}

const pintarResultado=(data)=>{
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML ='';
  if (Array.isArray(data)) {
    resultadoDiv.innerHTML="El numero de objetos es "+data.length
  }
  else if (typeof data === 'object' && data !== null) {
    resultadoDiv.innerHTML="El numero de objetos es 1"
  }else{
    resultadoDiv.innerHTML = 'El JSON no es un objeto o un arreglo de objetos válido.';
  }
}