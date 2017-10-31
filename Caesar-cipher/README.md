# Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

## Pseudocoódigo

1. Pedir una frase al usuario y guardarla en una variable.
2. Si el usuario no ingreso nada mostrar un mensaje que diga "Ingresa una oración"
3. Verificar que la oración ingresada sea texto y no otro tipo de dato.
4. Si el dato ingresado no es texto regresar al paso 2.

5. Se crea una función llamada cipher.
6. Recorrer cada posición de la frase.
7. Encontrar el número de la letra en código ASCII.
8. Aplicar la fórmula de cifrado César al número ASCII.
9. Una vez obtenido el número  de la letra en ASCII lo convertimos
   a la letra que le corresponde.
10. Se agrega cada letra en un string.
11. Se muestra el texto cifrado

12. Se crea una función llamada decipher.
13. Recorrer cada posición del codigo.
14. Encontrar el número de la letra en código ASCII.
15. Aplicar la fórmula de decifrado César al número ASCII.
16. Una vez obtenido el número  de la letra en ASCII lo convertimos
a la letra que le corresponde.
17. Se agrega cada letra en un arreglo nuevo.
Se muestra el texto decifrado

###Diagrama de flujo
