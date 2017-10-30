//Pedir el número de la tarjeta de crédito al usuario y guardarlo.
var cardNum = [prompt("¿Cuál es tu número de tarjeta de crédito?")];
//Si el usuario no ingresa nada imprimir un mensaje que diga "ingresa un número"
    if (cardNum.length === 0) {
    alert("Ingresa un número");
    }
//Crear una función llamada isValidCard
var isValidCard = function(array){
    var totalSum = 0;
    var item = 0;
    //Invertir el número de la tarjeta
    var arrayRev = array.reverse();
    //Recorremos el arreglo sólo en las posiciones pares
    for (var i = 1; i < arrayRev.length; i=i+2) {
      item = arrayReverse[i]*2;
      if (item>=10) {
        for (i = 0; i<2 ; i++) {
          item = [i]+[i+1];
        }

      }
      ArrayRev.splice(i,1,item);
         for (i = 0; i < ArrayRev.length; i++) {
         totalSum += array[i];
         }

           if (totalSum%10===0) {
           return "Tarjeta válida";

           } else {
           return "Tarjeta inválida";

           }
    }

}
