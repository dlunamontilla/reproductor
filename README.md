# reproductor

## Evento para teclado:

La función `teclado()` permite ejecutar acciones con teclas específicas:

```js

// Ejemplo de uso:
if ( typeof soltar !== "undefined" )
  teclado( keyDown.f1, e => {
    e.preventDefault();
    console.clear();
    console.log( "e =>", e );
  }, soltar);
```

Donde `soltar` es el elemento HTML con `id=soltar`.

<!-- Documentar código JavaScript:
https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=881:guia-de-estilo-javascript-comentarios-proyectos-jsdoc-param-return-extends-ejemplos-cu01192e&catid=78&Itemid=206
 -->