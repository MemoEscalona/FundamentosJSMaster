const button= document.getElementById('button')
const triggerRequest=()=>{
    //entrada de datos
    const url = document.getElementById('url').value;
    button.disabled=true;
    button.innerText="Procesando..."
    //realizar peticion
    const request=fetch(url)
    request.then(response=>{
      return response.json();
    }).then(json=>{
      pintarResultado(json)
      button.disabled=false;
      button.innerText='Realizar petición y pintar'
    })
    
}
const reqListener = (e)=>{
  const target=e.target;
  if(target.status===200){
    const resultado=JSON.parse(target.response);
    pintarResultado(resultado)
  }else{
    alert("hubo un error")
  }
}

const pintarResultado=(data)=>{
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML ='';
  if (Array.isArray(data)) {
    resultadoDiv.innerHTML=generateObjectHtml(data[0])
  }
  else if (typeof data === 'object' && data !== null) {
    resultadoDiv.innerHTML=generateObjectHtml(data)
  }else{
    resultadoDiv.innerHTML = 'El JSON no es un objeto o un arreglo de objetos válido.';
  }
}

const generateObjectHtml = (elemento) => {
  let output = "<ul>";
  for (let key in elemento) {
    output += `<li><strong>${key}</strong></li>`;
  }
  output += "</ul>";
  return output;
}


