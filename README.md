## Módulo 3: Ejercicio de evaluación final

# LISTADO DE PERSONAJES DE RICK AND MORTY

### Enunciado

La página web consiste en un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. He usado módulos funcionales de React, y SASS para realizarlo.

### Listado de personajes

En primer lugar, he utilizado el servicio de https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json que me ha devuelto información sobre los primeros 20 personajes de la serie y he pintado la foto, el nombre y la especie de cada uno de ellos.
He utilizado props para pasar desde App a CharacterCard la información del fetch que después he pintado usando grid.

### Filtrado de personajes

En la segunda parte he filtrado los personajes para
buscarlos por nombre. Para ello, he añadido un <input> a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. Los personajes se filtran independientemente de que se introduzca el texto en mayúsculas o minúsculas.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
