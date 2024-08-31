const findFactorial = ()=>{
    let error=false;
    //entrada de datos
    const number1 = parseInt(document.getElementById('number1').value);
    //validacion de entrada
    if(!validateNumber(number1,"int")){
        alert("El número debe ser un entero positivo")
        error=true;
    }

    if(!error){
        //definimos contador en el valor del numero
        let contador=number1;
        //definimos el valor del factorial como 1, ya que el 1 al multiplicarse por otro numero, resultara el otro numero
        let factorial=1;
        //definimos como arranca la cadena
        let cadena=""+number1+"";
        //inicio de sentencia de repeticion do while, donde queremos que se ejecute este codigo mientras contador sea mayor a cero
        do{
            //calculamos el producto del valor de factorial, por el valor actual del contador
            factorial=factorial*(contador);
            //si contador es diferente del numero original, concatenamos el operador y el contador
            if(contador!=number1){
                cadena+="*"+contador;
            }
            //decrementamos en 1 el contador
            contador--;
        }while(contador>0);
        //mandamos a salida a la pantalla
        const message = `El factorial es: ${number1}!=${cadena}=${factorial}`;
        document.getElementById('factorialNumberMessage').textContent = message;
    }

}


// funcion que valida que un numero sea positivo y del tipo de dato esperado.
const validateNumber=(currentValue,type)=>{
    let valid=false;
    if(currentValue>0){
        if(type==="int"){
            valid=Number.isInteger(currentValue);
        }else{
            valid=Number.parseFloat(currentValue)!=NaN;
        }
    }
    return valid;
};