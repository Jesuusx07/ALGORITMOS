// Función que suma dos números
function suma() {
    // Pedimos al usuario que ingrese los valores
    let numero1 = parseInt(prompt('Ingresa el primer valor'));
    let numero2 = parseInt(prompt('Ingresa el segundo valor'));
    let resultado = numero1 + numero2;

    // Mostramos el resultado en la consola
    console.log("La suma de " + numero1 + " y " + numero2 + " es: " + resultado);
    alert('El resultado es: ' + resultado);
}

//1. algoritmo que determina la suma, resta, multiplicacion y division entre dos valores ingresados por el usuario

function opBasicas(){  
    let A;
    let B;
    let multiplicacion;
    let division;
    let suma;
    let resta;

    A = parseInt(prompt ('ingresa el primer valor'));
    B = parseInt(prompt(' ingresa el segundo valor'));
    //realizar operacion
    resta = A - B;
    multiplicacion = A * B
    division= A / B
    suma= A + B

    //mostrar resultado


    alert('La resta de los numeros es de: ' + resta)

    alert(' el producto de los numeros es de: ' + multiplicacion)

    alert('La division es de: ' + division)

    alert('La suma es de ' + suma)
}


//2. realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario 
function Ncuadrado(){

    let A;

    A = parseInt(prompt ('ingresa el primer valor'));

    cuadrado = A * A

    console.log('el numero del cuadrado es ' + cuadrado );
    alert('El resultado es: ' + cuadrado);

}

//3. realizar un algoritmo que determine un triangulo a partir de la base y altura ingresadas por el usuario
function triangulo(){
     
    let base 
    let altura

    base = parseInt(prompt ('ingresa la base del triangulo'));
    altura = parseInt(prompt(' ingresa la altura del triangulo'));

    let area =(base * altura) / 2;

    console.log( ' el area del triangulo es: ' + area );
    alert('el resultado es: ' + area);

}
//4. realizar un algoritmo que determine los kilometros, pulgadas y metros de un valor dado en cm 
function distancia(){

    let CM;

    CM = parseInt(prompt ('ingresa el valor en cm: '));

    KM = CM * 0.0001
    IN = CM * 0.393701
    M = CM * 0.01

    console.log ( ' el valor dado en cm es: ' + KM);
    console.log ( ' el valor dado en cm es: ' + IN);
    console.log ( ' el valor dado en cm es: ' + M);
    alert('el resultado es: ' + KM);
    alert('el resultado es: ' + IN);
    alert('el resultado es: ' + M);

}

//5. algoritmo que determine si el numero ingresado por el usuario es par o impar
function ParOimpar() {


    let = 0
    let prueba = 0

    a = parseInt(prompt ("Ingrese un numero"))
    prueba = a % 2

    if (prueba == 0){
            alert("su numero es par")
}
    else{
            alert("Su numero es impar")
}
}

//7. algoritmo que determine el mayor de dos numeros ingresados por el usuario
function Nmayor (){
    let A = 0
    let B = 0

    A = parseInt(prompt("Ingrese un numeros"))
    B = parseInt(prompt("Ingrese un numeros"))
    
    if (A > B){
        alert(" Su numero es mayor " + A )
    }
    else{
        alert(" su numero es mayor " + B)
    }   
    
    

}

//8. algoritmo que determine el menor de tres numeros ingresado por el usuario
function Nmenor() {
    let A = 0
    let B = 0
    let C = 0

    A = parseInt(prompt("Ingrese un numeros"))
    B = parseInt(prompt("Ingrese un numeros"))
    C = parseInt(prompt("Ingrese un numeros"))

    if ((A < B) && (A < C)){
        alert(" el  numero " + A + ' es menor a ' + B + 'y a ' + C)
    }
    else if((A < B) && (B < C)){
        alert(" el numero " + B + ' es menor a ' + A +' y a ' + C)
    }
    else if((C == A ) && (A == C) && (C )){
        alert(" el numero " + A + ' es igual a' + B +' e igual a' + C)
    }
    else{
        alert(" el numero "+ C +" es menor a " + B +' y a ' + A)
    }
}

//8. el colegio ABC requiere un sistema que capture el nombre del estudiante, materia y 7 calificaciones entre el uno y diez, con esta informacion determinar si el estudiante aprobo o reprobo teniendo en cuenta que se aprueba con 6.1
function estudiante(){
    let nombre
   
    nombre = prompt('ingrese su nombre')
   
    let materia 
   
    materia = prompt('ingrese la materia')
   
    let promedio = 0
   
    let calificacion_1 = 0
    let calificacion_2 = 0
    let calificacion_3 = 0
    let calificacion_4 = 0
    let calificacion_5 = 0
    let calificacion_6 = 0
    let calificacion_7 = 0
   
    calificacion_1 = parseFloat(prompt('ingrese su primera clasificacion'))
    calificacion_2 = parseFloat(prompt('ingrese su segunda clasificacion'))
    calificacion_3 = parseFloat(prompt('ingrese su tercera clasificacion'))
    calificacion_4 = parseFloat(prompt('ingrese su cuarta clasificacion'))
    calificacion_5 = parseFloat(prompt('ingrese su quinta clasificacion'))
    calificacion_6 = parseFloat(prompt('ingrese su sexta clasificacion'))
    calificacion_7 = parseFloat(prompt('ingrese su septima clasificacion'))
   
    promedio =  (calificacion_1 + calificacion_2 + calificacion_3 + calificacion_4 + calificacion_5 + calificacion_6 + calificacion_7) / 7
   
    if (promedio >= 6.1){
       alert('estudiante ' + nombre + ' matriculado en la materia de ' + materia + ' su nota final es ' + promedio + ', quedo aprobado :D')
    }
    else{
       alert(' estudiante ' + nombre + ' matriculado en la materia de ' + materia + ' su nota final es ' + promedio + ', quedo reprobado :S')
    }


    

    
    
}
//9. un individuo decide invetir su capital en un banco, y requiere saber cuanto dinero ganara despues de N numero de anos teniendo en cuenta que el banco paga un interes mensual del 0.7% 

function inversion() {
    let capital, tiempo, interesGanancia, totalGanancia 

    capital= parseInt(prompt("Por favor ingrese el capital a invertir"));
    tiempo= parseInt(prompt("Por favor ingrese el tiempo"));
    

    interesGanancia = (capital * 0.084) * tiempo;
    totalGanancia = capital + interesGanancia; 

    alert("Señor cachon su ganancia es de: " + interesGanancia);

    alert("Señor cachon su ganancia total es de" + totalGanancia);

}