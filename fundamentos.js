//tipos de datos primitivos

let nombre = 'jesus';  //declaramos el inicio de la variable nombre
let edad = 18;
let mayorEdad = true;


console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);



// datos compuestos o complejos

let frutas = ['pera', 'manzana', 'Sandia'];
console.log(typeof frutas)//sera de tipo objeto arreglo

let auto={
    marca: 'ferrari',
    modelo: 2017,
    color: 'rojo',
    placa: 'SYX-777',
    tipo: 'hiperdeportivo',
    unicoDueno: true
}
console.log(typeof auto);

//Concatenando variables en mensaje

console.log('hola ' + nombre + ' tienes ' + edad + ' años ');

//Estructuras condicionales

console.log('-------------------------------------------------------')
let calificacion = 100;

if (calificacion>= 90){
    console.log('Good Job!! ' + nombre + ' su calificacion es de ' + calificacion)
}
else if(calificacion>= 70){
    console.log('Aprovó raspando ' + nombre + ' Su nota fue de ' + calificacion)
}
else if(calificacion <= 50){
    console.log('Reprobó ' + nombre + ' tu nota fue de ' + calificacion)
}
else{
    console.log('perdedor ' + nombre + ' Tu nota fue de ' + calificacion)
}



//switch case

let dia = 'sabado';
switch (dia) {
    case 'lunes':
        console.log('empezando semana');
        break;
    case 'martes':
        console.log('Peor que ayer ');
        break;
    case 'miercoles':
        console.log('Vamos por la mitad, que bendicion');
        break
    case 'jueves':
        console.log('Ya casi');
        break
    case 'viernes':
        console.log('Por fin es viernes y el cuerpo lo sabe :D');
        break
    case 'sabado':
        console.log('DIa de guayabo jajaja:(');
        break
    case 'domingo':
        console.log('relajao');

    default:
        console.log('No es un dia de la semana')
        break;
}

//Estructuras de bucles de bucles
let numero = 1
while(numero <= 10){
    console.log('Ahora el numero es: ' + numero);
    numero ++;
}

//
//let i = 10

for(let i = 100; i >= 0; i = i - 10){
    console.log('Ahora el numero es de ' + i)
}


//Funciones

function suma(valor1, valor2){
    return valor1 + valor2;
}
let resultado = suma(8, 24);

console.log('el resultado es de ' + resultado)