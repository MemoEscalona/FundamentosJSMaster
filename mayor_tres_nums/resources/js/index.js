

const findMaxNumber = () => {
    //entrada de datos
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);


    let maxNumber = number1; // Suponemos que el primer número es el mayor inicialmente
    maxNumber=(number2 > maxNumber)?number2:maxNumber; // validamos si numero 2 es mayor, si lo asignamos, sino mantenemos valor
    maxNumber=(number3 > maxNumber)?number3:maxNumber; // validamos si numero 3 es mayor, si lo asignamos, sino mantenemos valor

    const message = `El número mayor es: ${maxNumber}`;
    document.getElementById('maxNumberMessage').textContent = message;
};
