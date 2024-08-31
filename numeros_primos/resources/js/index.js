const findPrimeNumber=()=>{
    let error=false;
    //entrada de datos
    const number1 = parseInt(document.getElementById('number1').value);
    //validacion de entrada
    if(!validateNumber(number1,"int")){
        alert("El número debe ser un entero positivo")
        error=true;
    }
    if(!error){
        //1.Escriba una lista de todos los números naturales desde 0 hasta n, 
        // lo vamos a representar con un arreglo, 
        // donde indice representa el numero natural 
        // el valor en el indice indica si fue marcado (false) o no marcado(true)
        let naturalNumbers=Array(number1+1).fill(true);
        // 2.	Marca primos[0] y primos[1] ya que 0 y 1 no son primos.
        naturalNumbers[0]=naturalNumbers[1]=false;
        // Aplicacion de la criba de Eratóstenes
        //3. Para i desde 2 hasta la raíz cuadrada de n haga lo siguiente, calcular la raiz cuadrada tiene un costo computacional alto asi que aplican el algebra tenemos:
        //  i == sqrt(number1), se puede expresar como i**2 == number1, lo que es igual a i*i==number1, usaremos esta ultima expresion
        for(let i=2; i*i <=number1;i++){
            //si no ha sido marcado
            if(naturalNumbers[i]){
                //a.	Para j desde i hasta n/i haga lo siguiente
                for (let j = i; i * j <= number1; j++) {
                    naturalNumbers[i*j]=false;
                }
            }
        }
        // salida de datos
        
        let cadena="";
        for (let i = 2; i <= number1; i++) {
            if (naturalNumbers[i]) {
                cadena+=i+",";        
            }
        }

        // Eliminar la última coma si la cadena no está vacía
        if (cadena.length > 0) {
            cadena = cadena.slice(0, -1);
        }
        document.getElementById('primeNumberMessage').textContent = cadena;
        
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