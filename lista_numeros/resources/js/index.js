const calculateNumberList = () => {
    getListOnlyOneFor();
    getListTwoFors();
}
const getListOnlyOneFor = () => {
    //entrada de datos
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
   
    //obtener numero mayor
    const maxNumber=(number1 > number2)?number1:number2;
    //obtener numero menor
    const minNumber=(number1 > number2)?number2:number1;

    //elementos de html de tipo <ul>
    let integerList=document.getElementById('integerListOneFor');
    let evenNumberList=document.getElementById('evenNumbersListOneFor');
    let oddNumberList=document.getElementById('oddNumberListOneFor');

    integerList.innerHTML = '';
    evenNumberList.innerHTML = '';
    oddNumberList.innerHTML = '';
    for(let i=minNumber;i<=maxNumber;i++){
       
        // Calculate integerList
        // creacion de elemento li
        let integerLi = document.createElement("li");
        // establecer texto de li
        integerLi.appendChild(document.createTextNode(i));
        // agregar li al final al listado UL
        integerList.appendChild(integerLi);
        console.log(i)
        //calcular evenNumberList
        if(i%2==0){ //si el entero modulo 2 es igual a 0, es un numero par
            //creacion de elemento li
            let evenLi=document.createElement("li");
            evenLi.appendChild(document.createTextNode(i));
            evenNumberList.prepend(evenLi);
        }else{
            //si el entero modulo 2 es diferente a 0, es un numero impar
            //creacion de elemento li
            let oddLi=document.createElement("li");
            oddLi.appendChild(document.createTextNode(i));
            oddNumberList.prepend(oddLi);
        }
    }
};

const getListTwoFors=()=>{
    //entrada de datos
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    
    //obtener numero mayor
    const maxNumber=(number1 > number2)?number1:number2;
    //obtener numero menor
    const minNumber=(number1 > number2)?number2:number1;

     // Calculate integerList
    let integerList=document.getElementById('integerListTwoFors');
    integerList.innerHTML = '';
   
    for(let i=minNumber;i<=maxNumber;i++){
        let integerLi = document.createElement("li");
        // establecer texto de li
        integerLi.appendChild(document.createTextNode(i));
        // agregar li al final al listado UL
        integerList.appendChild(integerLi);
    }

    let evenNumberList=document.getElementById('evenNumbersListTwoFors');
    let oddNumberList=document.getElementById('oddNumberListTwoFors');
    evenNumberList.innerHTML = '';
    oddNumberList.innerHTML = '';
    for(let i=maxNumber;i>=minNumber;i--){
        //calcular evenNumberList y oddEven List
        if(i%2==0){ //si el entero modulo 2 es igual a 0, es un numero par
            //creacion de elemento li
            let evenLi=document.createElement("li");
            evenLi.appendChild(document.createTextNode(i));
            evenNumberList.appendChild(evenLi);
        }else{
            //si el entero modulo 2 es diferente a 0, es un numero impar
            //creacion de elemento li
            let oddLi=document.createElement("li");
            oddLi.appendChild(document.createTextNode(i));
            oddNumberList.appendChild(oddLi);
        }

    }

}