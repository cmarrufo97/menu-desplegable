# Documentación Programador

Los pasos que a continuación se mostraran, van destinados a programadores para el uso del plugin que generará un menú.
#### **IMPORTANTE:**
Para hacer uso del plugin, tendremos que linkear el script de jquery,el script del plugin y tu script de uso de dicho plugin, en el html de la página en cuestión. Como se muestra a continuación:
```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="./path-to-file/menuPlugin.js"></script>
    <script src="./path-to-file/yourApp.js"></script>
```

##### Creación de barra
Para crear una barra, en cuyo interior se colocará el menú o menús que queramos visualizar, se utilizará lo siguiente.
```js
$(selector).navBar('agregarBarra',nombreClase);
```
Un ejemplo:
```js
$('body').navBar('agregarBarra','barra');
```
Si en algún caso necesitamos tener mas barras, se realizará el mismo proceso descrito anteriormente.

##### Creación de un menú
Para crear un menú, que simplemente se inyectará un <ul> en el cual se añadiran las secciones principales, se utilizará la siguiente función.
```js
$(selector).navBar('agregarMenu',idMenu);
```
Por ejemplo:
```js
$('.barra').navBar('agregarMenu','menu1');
```
Se pueden agregar mas de un menú a la misma barra, pero si queremos una barra independiente y un menú, creariamos otra barra y en ella añadiriamos dicho menú. Por lo que, en este caso, obtendríamos dos barras de menús independientes.

##### Agregar sección/es
Para agregar una o varias secciones a un menú. Utilzaremos la siguiente función:
```js
$(selector).navBar('agregarSeccion',idSeccion,nombre,url);
```
Ejemplo:
```js
$('#menu1').navBar('agregarSeccion','sec1','Home','http://www.google.com');
```
Si queremos agregar mas secciones, tan solo repitiriamos el mismo proceso.

##### Agregar subseccion a menú
Para agregar una subsección a un menú, realizaremos lo siguiente.
```js
$(selector).navBar('agregarSubSeccion',idSubSeccion,nombreClase);
```
Ejemplo:
```js
$('#sec1').navBar('agregarSubSeccion','sub1','subseccion');
```

##### Agregar items a una subsección
Para agregar una serie de items a una subsección, utilizaremos lo siguiente.
```js
$(selector).navBar('agregarItem',idItem,nombreItem,url);
```
Ejemplo:
```js
$('#sub1').navBar('agregarItem','i1','Item 1','http://www.google.com');
```
Si queremos añadir más items, se realizará el mismo proceso.

## Eliminación de elementos
Para eliminar elementos (menús,secciones,subsecciones e items) se seguiran los siguientes pasos.

#### Eliminar menú
Para eliminar un menú se realizará lo siguiente.
```js
$(selector).navBar('eliminarMenu',idMenu);
```
Ejemplo:
```js
$('.barra').navBar('eliminarMenu','#menu1');
```

##### Eliminar sección
Para eliminar una sección, realizaremos lo siguiente.
```js
$(selector).navBar('eliminarSeccion',nombreSeccion);
```
Ejemplo:
```js
$('.barra').navBar('eliminarSeccion','Home');
```

##### Eliminar subsección
Para eliminar una subsección, tendremos que hacer lo siguiente.
```js
$(selector).navBar('eliminarSubSeccion',idSubSeccion);
```
Ejemplo:
```js
$('#menu1').navBar('eliminarSubSeccion','sub1');
```

##### Eliminar item
Para eliminar un item, que se encuentran dentro de un submenu, realizaremos lo siguiente.

```js
$(selector).navBar('eliminarItem',idItem);
```
Ejemplo:
```js
$('#sub1').navBar('eliminarItem','i1');
```

#### **IMPORTANTE:**
A la hora de crear elementos con id's en particular, tendremos que tener cuidado, ya que el plugin comprobará si existen elementos existentes con ese id, si fuera el caso, se muestrará un mensaje de error por consola. Por lo tanto, procurad no repetir id's.
