#Tarjeta de crédito válida
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

## Pseudocódigo
 Pedir el número de la tarjeta de crédito al usuario y guardarlo.
 Si el usuario no ingresa nada imprimir un mensaje que diga "ingresa un número".
 Crear una función llamada isValidCard.
 Invertir el número de la tarjeta.
 Recorremos el arreglo sólo en las posiciones pares.
 Multiplicamos por 2 los dígitos de dichas posiciones.
 Contar digitos del resultado de la multiplicación.
 Si tiene 2 digitos sumarlos.
 Guardamos los resultados en la misma posición pero, de un nuevo arreglo.
 Sumamos todos los elementos del nuevo arreglo.
 El total de la suma se divide entre 10.
 Si el residuo es igual a cero se imprime "Tarjeta válida", de lo contrario "Tarjeta inválida".




###Diagrama de flujo
