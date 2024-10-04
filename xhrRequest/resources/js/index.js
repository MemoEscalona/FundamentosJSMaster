const button= document.getElementById('button')
const triggerRequest=()=>{
    //entrada de datos
    const url = document.getElementById('url').value;
    button.disabled=true;
    button.innerText="Procesando..."
    //realizar peticion
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", url);
    req.send();
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
  console.log(data)
  let resultadoDiv = document.getElementById("resultado");
  //try {
    resultadoDiv.innerHTML ='';
    //let data=JSON.parse(json)
    if (Array.isArray(data)) {
      resultadoDiv.innerHTML=generateTableHtml(data)
    }
    else if (typeof data === 'object' && data !== null) {
      resultadoDiv.innerHTML=generateObjectHtml(data)
    }else{
      resultadoDiv.innerHTML = 'El JSON no es un objeto o un arreglo de objetos válido.';
    }
  /*} catch (error) {
    resultadoDiv.innerHTML = error;
  }*/
  button.disabled=false;
  button.innerText='Realizar petición y pintar'
}

const generateTableHtml = (elements)=> {
  let output='';
  if (elements.length === 0) {
    output = "<p>El arreglo está vacío.</p>";
  }else{
    //generacion de encabezado
    output = "<table border='1' cellpadding='10'><thead><tr>";
    let keys = Object.keys(elements[0]);
    keys.forEach(key => {
      output += `<th>${key}</th>`;
    });
    output += "</tr></thead><tbody>";
    //llenado de data
    elements.forEach(obj => {
      output += "<tr>";
      keys.forEach(key => {
        output += `<td>${obj[key]}</td>`;
      });
      output += "</tr>";
    });
    //cierre de tabla
    output += "</tbody></table>";
  }
  return output;
}
const generateObjectHtml = (elemento) => {
  let output = "<ul>";
  for (let key in elemento) {
    output += `<li><strong>${key}</strong>: ${elemento[key]}</li>`;
  }
  output += "</ul>";
  return output;
}


