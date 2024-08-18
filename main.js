//EJERCICIO 1
//Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function prueba(num){
if(num % 2 === 0){
console.log("Soy un numero par")
}else{
console.log("Soy un numero impar")
}
}

prueba(5)

                  
//EJERCICIO 2
//Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es,
// indicar por consola que son iguales.

function ejemplo(num1, num2) {
  if (num1 > num2) {
      console.log(`${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
      console.log(`${num2} es mayor que ${num1}`);
  } else {
      console.log("Son iguales");
  }
}

ejemplo(10, 5)             

//EJERCICIO 3
//Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
       console.log(`${numero} es múltiplo de 5`);
  } else {
        console.log(`${numero} no es múltiplo de 5`);
   }   
}

esMultiploDeCinco(10);  
esMultiploDeCinco(7);  

//EJERCICIO 4
//Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 
//hasta llegar a ese número.

function hastaEl50(number){
    for(let i = 0; i <= number; i++){
   console.log(i)                                                                                                                     
   }                
   }                                  
hastaEl50(50) 

//EJERCICIO 5
// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra 
//la cantidad correspondiente al número indicado.

function repetirPalabra(palabra, cantidad) {
   for (let i = 0; i < cantidad; i++) {   
   console.log(palabra)
   }
}

repetirPalabra("marcos", 4)

//NO SE PUEDE PASAR A BUCLE FOR OF: para arrays, cadenas de texto, etc

//EJERCICIO 6
//Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

 let nombres =  ["Luli","Roque","Agus","Lean", "Marcela"]

 function elementosArray(array){
for(let i = 0; i < array.length; i++){
console.log(array [i])
}
}  
elementosArray(nombres) 
// CON FOR OF   
let generador =["Luli","Roque","Agus","Lean", "Marcela"]
for(let value of generador) {
  //  console.log(value)
}
//EJERCICIO 7
//Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
// menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0". 

let numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function imprimirSalteado(arrNums) {
  for (let i = 0; i < arrNums.length; i++) {
    if (i === 4) {
      continue; 
   }else{ 
    console.log(arrNums[i]); 
  }
}
}

imprimirSalteado(numeros)

//EJERCICIO 8 
// Crea una función que reciba un array de números y un número por parámetro
// e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let numeros4 = [1, 2, 3, 4, 5];
let multiplicador = 3;

function multiplicarArrayPorNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
  }
}

multiplicarArrayPorNumero(numeros4, multiplicador);


