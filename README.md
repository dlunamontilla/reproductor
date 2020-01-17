# reproductor

## Evento para teclado:

La función `teclado()` permite ejecutar acciones con teclas específicas:
``` lang-js
if ( typeof soltar !== "undefined" )
  teclado( keyDown.f1, e => {
    e.preventDefault();
    console.clear();
    console.log( "e =>", e );
  }, soltar);
```