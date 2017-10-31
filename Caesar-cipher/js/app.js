//Pedir una frase al usuario y guardarla en una variable.
var text = prompt("Escribe una frase");
var ciph = "";
//Si el usuario no ingreso nada mostrar un mensaje que diga "Escriba una frase"
if (text == " ") {
  alert("Escribe una frase");
}
//Se crea una función llamada cipher
var cipher = function() {
  //Recorrer cada posición de la frase.
    for (i = 0; i < text.length; i++) {
      //Encontrar el número de la letra en código ASCII.
      var character = text.charCodeAt(i);
      //Verificar si corresponde a una minuscula o mayuscula.
      if (character >= 97 && character <= 122) {
        //Aplicar la fórmula de cifrado César al número ASCII.
        //Una vez obtenido el número  de la letra en ASCII lo convertimos
        // a la letra que le corresponde.
        //Se agrega cada letra en un string.
       ciph += String.fromCharCode((character - 97 + 33) % 26 + 97);
      }
      else {
       ciph += String.fromCharCode((character - 65 + 33) % 26 + 65);
      }
    }
//Se muestra el texto cifrado
return alert("El cifrado es: " + ciph)
}
cipher(text);
