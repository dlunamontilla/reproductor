import { reproductor } from "./componentes/reproductor.js";
import { nodo as _nodo } from "./componentes/nodo.js";
import { teclado, keyDown } from "./componentes/teclado.js";

console.log( keyDown.SPACE );

let style = "background-color: rgba(0, 128, 213, 0.05); font-size: 2rem; color: #0080d4; padding: 10px; border: 1px solid; display: flex; position: absolute; margin: auto; left: 0; right: 0; top: 0; bottom: 0; max-height: 150px; max-width: calc(100% - 20px); align-items: center; border-radius: 10px; text-align: center;";

teclado( keyDown.SPACE, () => {
  console.log( "%cHas presionado SPACE", style );
});


teclado ( keyDown.keyNum5, () => {
  console.clear();
  console.log( "%cHas presionado la tecla 5 del teclado numérico", style );
});

teclado( keyDown.key5, () => {
  console.clear();
  console.log( "%cHas presionado la tecla 5 que se ubica sobre las teclas alfabéticas", style );
});

if ( typeof soltar !== "undefined" )
  teclado( keyDown.f1, e => {
    e.preventDefault();
    console.clear();
    console.log( "e =>", e );
  }, soltar);

teclado( keyDown.keyS, (e) => {
  console.log( "e =>", e );
  e.preventDefault();
  e.stopPropagation();
  
  if ( e.ctrlKey )
    open("./json.php", "_blank", "width=400, height=600");

});

try {
  reproductor();
}catch(e) {
  console.log("No hay reproductor de música");
}

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

// G82ht8Pi