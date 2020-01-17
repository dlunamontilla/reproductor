/**
 * 
 * @param {*} fn 
 * @autor David E Luna M <davidlunamontilla@gmail.com>
 * @version 1.0.0
 * @see Eventos de teclado
 * 
 */

import { keyDown, keyUp } from "./teclas.js";

let teclado = ( tecla, fn, element = document ) => {
  if ( typeof tecla === "undefined" || typeof fn === "undefined" )
    return;

  const keyCompare = ( e, tecla ) => {
    if ( typeof e === "undefined" || typeof tecla === "undefined" )
      return false;
    
    // Teclas del teclado
    let key = e.which || tecla.KeyCode;
    
    return key === tecla;
  }

  if ( Object.prototype.toString.call( element ) === "[object String]" )
    element = document.querySelectorAll( element );
  
  // Escuchar eventos:
  const listenEvent = ( elemento ) => {
    elemento.addEventListener('keydown', event => {

      if ( event.ctrlKey || event.altKey || event.shiftKey ) {
        if ( keyCompare( event, tecla ) )
          fn( event );
      } else {
        if ( keyCompare( event, tecla ) )
          fn( event );
      }
      
    }, false);
  }

  // Si elementos es una lista de nodos (nodeList) se procede
  // se procederá a escuchar los eventos de los nodos de la lista:
  if ( element.length > 0 ) {
    for ( let objeto of element )
      listenEvent( objeto );

    return;
  }
  
  listenEvent( element );
}

export { teclado, keyDown, keyUp }

// https://youtu.be/g60iaQXW70Q?t=341
// https://youtu.be/E5T072rTNVA?t=580