## Módulo 3: Ejercicio de evaluación final

# LISTADO DE PERSONAJES DE RICK AND MORTY

## Información general

He usado como librerías _React_ y _React Router_ para crear módulos y especificar rutas entre ellos. _npm_ como gestor de paquetes de dependencias. Para instalar las dependencias debe utilizarse el comando **npm install** y para lanzar la aplicación en local **npm start**. El preprocesador CSS que he usado es SCSS.

### Enunciado

La página web consiste en un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje.

### Listado de personajes

En primer lugar, he utilizado el servicio de https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json que me ha devuelto información sobre los primeros 20 personajes de la serie y he pintado la foto, el nombre y la especie de cada uno de ellos.
He utilizado _props_ para pasar desde App a CharacterCard la información del _fetch_ que después he pintado usando _grid_.

### Filtrado de personajes

En la segunda parte he filtrado los personajes para buscarlos por nombre. Para ello, he añadido un <input> a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

##### Características

1. Al entrar en el detalle de un personaje y a continuación pulsar atrás, en el _input_ se muestra el texto que tenía anteriormente.
2. He añadido un _preventDefault_ al formulario para impedir que recargue la página o cambie de ruta al presionar la tecla _intro_.
3. Aparece un mensaje de error cuando no el texto del _input_ con ningún personaje.
4. Los personajes se filtran independientemente de que se introduzca el texto en mayúsculas o minúsculas.

### Detalle de personajes

La última funcionalidad implementada es que al hacer click sobre la tarjeta de un personaje, su información aparece a pantalla completa: la foto, nombre, especie, el planeta de origen y si está vivo o muerto. Para hacer esto he usado rutas y _React router_.

##### Características

1. Si se visita la URL directamente en el navegador se ve el detalle del personaje.
2. Al cambiar la url del personaje aparece un mensaje de error.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
