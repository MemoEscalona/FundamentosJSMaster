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
    let output='';
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if(element.login=="mojodna"){
        output=generateObjectHtml(element)
      } 
    }
    resultadoDiv.innerHTML=output
  }
  else if (typeof data === 'object' && data !== null) {
    if(data.login=="mojodna"){
      resultadoDiv.innerHTML=generateObjectHtml(data)
    }
  }else{
    resultadoDiv.innerHTML = 'El JSON no es un objeto o un arreglo de objetos válido.';
  }
}

const generateObjectHtml = (elemento) => {
  let output = "<ul>";
  for (let key in elemento) {
    output += `<li><strong>${key}</strong>: ${elemento[key]}</li>`;
  }
  output += "</ul>";
  return output;
}