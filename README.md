# reproductor

## Evento para teclado:

La función `teclado()` permite ejecutar acciones con teclas específicas:

```js

// Ejemplo de su uso:
if ( typeof soltar !== "undefined" )
  teclado( keyDown.f1, e => {
    e.preventDefault();
    console.clear();
    console.log( "e =>", e );
  }, soltar);
```