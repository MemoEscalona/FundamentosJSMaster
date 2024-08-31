const calculateMcdMcm = ()=>{
    let error=false;
    //entrada de datos
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
     //Paso 2 - Validacion de datos
     if(!validateNumber(number1,"int")){
        error=true;
        alert("El Número 1 debe ser un número entero positivo")
    }

    if(!validateNumber(number2,"int")){
        error=true;
        alert("El Número 2 debe ser un número entero positivo")
    }

    if(!error){
        //calculamos el MCD
        let mcd=calculateMcd(number1,number2);
        //calculamos el mcm
        let mcm=calculateMcm(number1,number2,mcd);
        //mandamos resultados a la pantalla
        document.getElementById('mcd').textContent = mcd;
        document.getElementById('mcm').textContent = mcm;
    }

}
//Algoritmo de euclides
const calculateMcd= (a,b)=>{
    //mientras b sea distinto de 0
    while(b!=0){
        //calcular residuo del modulo a%b
        let r=a%b;
        //asignamos a el valor de b
        a=b;
        //asignamos a b el valor del residuo
        b=r;
    }
    //retornamos a
    return a;
}
const calculateMcm= (a,b,mcd)=>{
    return Math.abs(a*b)/mcd;
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