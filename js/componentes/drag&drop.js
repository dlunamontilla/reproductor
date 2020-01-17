// CREAR UN enlace SIMULADO:
let enlace = [
  {
    href : "#Enlace 1",
    target : "_blank",
    className : "l--enlace",
    textContent : "1. Texto del enlace"
  },

  {
    href : "#Enlace 2",
    target : "_blank",
    className : "l--enlace",
    textContent : "2. Texto del enlace"
  },

  {
    href : "#Enlace 3",
    target : "_blank",
    className : "l--enlace",
    textContent : "3. Texto del enlace"
  },

  {
    href : "#Enlace 4",
    target : "_blank",
    className : "l--enlace",
    textContent : "4. Texto del enlace"
  },

  {
    href : "#Enlace 5",
    target : "_blank",
    className : "l--enlace",
    textContent : "5. Texto del enlace"
  }
];

// REPRODUCTOR DE AUDIO:
(function () {
  if ( typeof app === "undefined" )
    return;
  
  let nodo = new _nodo();
  let enlaces = nodo.link( enlace );

  enlaces.forEach( ( enlace, key ) => {
    enlace.draggable = true;
    enlace.setAttribute( "id", "enlace" + key );
    
    if ( typeof ubicacion === "undefined" )
      return;

    ubicacion.appendChild( enlace );

    // Evento de partida:
    enlace.ondragstart = e => {
      e.dataTransfer.setData( "text", e.target.id );

      console.log( e );
    }

  });

  ( () => {
    if ( typeof soltar === "undefined" )
      return;
    
    let prevenir = e => {
      e.preventDefault();
      e.stopPropagation();
    }

    let soltarElemento = ( e, elemento ) => {
      preventDefault(e);

      let data = e.dataTransfer.getData( "text" );
      elemento.appendChild( document.getElementById( data ));
    }

    soltar.ondragover = e => {
      e.preventDefault();
      e.stopPropagation();
    }

    soltar.ondrop = e => {
      e.preventDefault();
      e.stopPropagation();

      console.log( e );

      let data = e.dataTransfer.getData( "text" );
      soltar.appendChild( document.getElementById( data ) );
    }

    ubicacion.ondragover = e => {
      e.preventDefault();
      e.stopPropagation();

      return;
    }

    ubicacion.ondragenter = e => {
      console.clear();
      console.log( "Se encuentra dentro => ondragenter: ", e );
    }

    ubicacion.ondragexit = e => {
      console.clear();
      console.log( "Ahora se encuentra fuera del área => ondragexit: ", e );
    }

    ubicacion.ondrop = e => {
      e.preventDefault();
      e.stopPropagation();
      
      let data = e.dataTransfer.getData( "text" );
      ubicacion.appendChild( document.getElementById( data ) );

      return;
    }

    console.log(soltar);
  })();

  
  // Función anónima autoejecutable:
  (() => {
    if ( typeof soltar === "undefined" )
      return;
    
    // Si el objeto soltar existe, se ejecutarán las
    // siguientes acciones:
    

  })();
}());