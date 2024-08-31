//escenario mas corto
const showDaysInMonthShortVersion = () => {
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const daysInMonth = new Date(year, month, 0).getDate();
    const message = `El mes ${month} del año ${year} tiene ${daysInMonth} días`;

    document.getElementById('daysMessage').textContent = message;
};

const showDaysInMonthWithSwitch=()=>{
    let error=false;
    //entrada de datos
    const iMonth = parseInt(document.getElementById('month').value);
    const iYear = parseInt(document.getElementById('year').value);
    //validacion de datos
    
    //Paso 2 - Validacion de datos
    if(!validateNumber(iMonth,"int")){
        error=true;
        alert("El Número de mes debe ser un número entero positivo")
    }

    if(!validateNumber(iYear,"int")){
        error=true;
        alert("El año debe ser un número entero positivo")
    }
    //si no hay error continuamos
    if(!error){
        //Paso 3 - obtenemos el numero de dias
        let iNumberDays=0;
        //se hace el uso de la sentencias switch, porque es la mejor manera de manejar este condicional
        switch(iMonth){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                //si el mes es 1,3,5,7,8,10 y 12, se establece que son 31 dias
                iNumberDays=31;
            break;
            case 4:
            case 6:
            case 9:
            case 11:
                //si el mes es 4,6,9,11, se establece que son 30 dias
                iNumberDays=30
            break;
            case 2:
                //si es mes 2, se evalua la expresion ternaria compuesta por:
                // Si es multiplo de 4 pero no de 100: iYear % 4 === 0 && iYear % 100 !== 0
                // o: ||
                // Si es multiplo de 400: iYear % 400 === 0
                // si alguna de las dos expresiones resulta en true, entonces se establecen 29, en caso contrario 28
                iNumberDays=((iYear % 4 === 0 && iYear % 100 !== 0) || iYear % 400 === 0)?29:28;
            break;
        }
        const message = `El mes ${iMonth} del año ${iYear} tiene ${iNumberDays} días`;
        document.getElementById('daysMessage').textContent = message;
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