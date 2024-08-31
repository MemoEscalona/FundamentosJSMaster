


const calcular= ()=>{
    let error=false;
    //Paso 1- obtener los datos de los campos de la interfaz
    let iProdAmount=parseInt(document.getElementById('units').value);
    let fUnitPrice=parseFloat(document.getElementById('unitPrice').value);


    //Paso 2 - Validacion de datos
    if(!validateNumber(iProdAmount,"int")){
        error=true;
        alert("Las unidadades del producto debe ser un número entero positivo")
    }

    if(!validateNumber(fUnitPrice,"float")){
        error=true;
        alert("El precio unitario debe ser un número decimal positivo")
    }

    if(!error){
        //Paso 3 - cacular subtotal
        let fSubTotal=iProdAmount*fUnitPrice;
        // Paso 4 - obtnener descuento
        let iDiscount=getDiscount(iProdAmount);
        let fDiscountAmount=iDiscount/100 * fSubTotal;
        // Paso 5 - calcular total
        let fTotal=fSubTotal-fDiscountAmount;
        
        // Paso 6 - Mostrar datos en pantalla
        document.getElementById('subtotal').textContent = fSubTotal.toFixed(2);
        document.getElementById('discount').textContent = fDiscountAmount.toFixed(2);
        document.getElementById('discountPercentage').textContent = iDiscount;
        document.getElementById('total').textContent = fTotal.toFixed(2);
    }else{
        document.getElementById('subtotal').textContent = 0.00;
        document.getElementById('discount').textContent = 0.00;
        document.getElementById('discountPercentage').textContent = 0;
        document.getElementById('total').textContent = 0.00;
    }
};

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

//funcion que obtiene el descuenta a aplicarle al usuario
const getDiscount = (iProdAmount)=>{
    let iDiscount=0;
    if(iProdAmount>10){
        iDiscount=10
    }
    if(iProdAmount>=25){
        iDiscount=20
    }
    if(iProdAmount>100){
        iDiscount=40
    }

    return iDiscount;
};
