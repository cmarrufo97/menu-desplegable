# Documentación Diseñador Web
La siguiente documentación va orientada para diseñadores web, en el cual, modificaran el aspecto de la barra de menú generada por el plugin.

### **IMPORTANTE**
Es recomendable hacer un reset la página y posteriormente trabajar en tu propia hoja de estilos (CSS). Es decir, tendremos que linkear un archivo reset.css y tu archivo de estilo.css, tal que:
```html
    <link rel="stylesheet" href="./path-to-file/reset.css">
    <link rel="stylesheet" href="./path-to-file/estilo.css">
```

##### Modificar barra
Para modificar la barra, como por ejemplo el background-color, la altura, etc, utilizaremos lo siguiente.
```css
.barra {
    background-color:lightblue;
    height: 80px;
}
```

##### Modificar los links de secciones
Para modificar el estilo de las secciones de un menú, podríamos hacer lo siguiente.
```css
.menu .seccion{
    float: left;
    /* display: inline-block; */
    position: relative;
    top: 2em;
    margin-left: 5%;
}
```

##### Apariencia de las secciones y los items
Para modificar tanto las secciones y los items de las subsecciones, podriamos hacer por ejemplo lo siguiente.

```css
.menu .seccion a{
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2em;
}

.subseccion .items a {
    font-weight: normal;
}

.subseccion .items {
    border-bottom: 1px solid black;
}
```

##### Desplegar los submenus desde CSS (OPCIONAL)
En realidad el desplegar los submenus con CSS no es estrictamente necesario, ya que el plugin dispone de una funcion que cumple tal requisito, pero si por el contrario queremos hacerlo, el resultado seria el siguiente.

```css
.seccion .submenus-container {
    display: none;
} 
.seccion:hover .submenus-container {
    display: block;
} 
```

##### Modificar apariencia contenedor de submenus
Para modificar la apariencia del contenedor de todos los submenus (es un div), haremos, por ejemplo, lo siguiente.

```css
.submenus-container {
    border: 1px solid black;
    border-bottom: none;
}
```

##### Animaciones
Si por ejemplo queremos que el color de las secciones cambie de color al hacer hover, podriamos hacer lo siguiente.
```css
.menu .seccion a:hover{
    color: white;
}
```

En conclusión, si tenemos mas de un menú o mas de una barra que contenga menús, tendremos que seguir los mismos pasos para modificar la apariencia, etc.
