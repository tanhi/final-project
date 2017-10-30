# Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

## Pseudocoódigo

Pedir una frase al usuario y guardarla en un arreglo.
Si el usuario no ingreso nada mostrar un mensaje que diga "Ingresa una oración"
Verificar que la oración ingresada sea texto y no otro tipo de dato.
Si el dato ingresado no es texto regresar al paso 2.
Preguntar al usuario si desea cifrar o decifrar dicho texto.
Si desea cifrar llamar a la función cipher.
Si desea decifrar llamar a la función decipher.

Se crea una función llamada cipher.
Recorrer cada posición del arreglo. 
Encontrar el número de la letra en código ASCII.
Aplicar la fórmula de cifrado César al número ASCII.
Una vez obtenido el número  de la letra en ASCII lo convertimos
a la letra que le corresponde.
Se agrega cada letra en un arreglo nuevo.
Se imprime el nuevo arreglo como el nuevo texto cifrado.

Se crea una función llamada decipher.
Recorrer cada posición del arreglo.
Encontrar el número de la letra en código ASCII.
Aplicar la fórmula de decifrado César al número ASCII.
Una vez obtenido el número  de la letra en ASCII lo convertimos
a la letra que le corresponde.
Se agrega cada letra en un arreglo nuevo.
Se imprime el nuevo arreglo como el nuevo texto


###Diagrama de flujo
