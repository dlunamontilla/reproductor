export function reproductor() {
  
  let
    audio = document.querySelector("#audio"),
    listaReproduccion = document.querySelector(".lista-reproduccion"),
    enlaces = listaReproduccion.querySelectorAll(".lista-reproduccion a"),
    bool = ( (typeof audio == "object") && (typeof enlaces.length == "number") ),
    playPause = document.querySelector("#play-pause"),
    title = document.querySelector("#title"),
    repeat = document.querySelector("#repeat");
  
  
  
  // Clases
  let
    play = "far fa-play-circle",
    pause = "far fa-pause-circle";

  let k = 0;

  let cancion = function (ob, elemento) {
    let e = document.querySelector(elemento);

    // Asignar texto a la canción
    if ( typeof e == "object" && typeof ob == "object" ) {
      e.innerHTML = ob.textContent;
    }
  }

  if ( bool ) {
    enlaces.forEach(function (enlace, key, array) {
      enlace.onclick = function (e) {
        // Evitar que se siga el enlace
        e.preventDefault();

        // Probar los resultados
        audio.src = enlace.href;

        if ( typeof playPause == "object" ) {
          playPause.click();
        }else {
          audio.play();
        }

        array.forEach( function (elemento) {
          elemento.classList.remove("seleccionado");
          elemento.parentNode.classList.remove("seleccionado");
          elemento.classList.remove("animate");
        });

        this.classList.add("seleccionado");
        this.parentNode.classList.add("seleccionado");
        this.classList.add("animate");
        k = key;

        cancion(this, "#title");
      }
    });

    // Cuando el usuario realiza una pausa
    audio.onpause = function () {
      enlaces[k].classList.remove("animate");
      enlaces[k].parentNode.classList.remove("play");

      if ( this.paused && typeof playPause == "object" && playPause.className != play ) {
        playPause.className = play;
      }
    }

    // Cuando el usuario reproduce un archivo de audio
    audio.onplay = function () {
      enlaces[k].classList.add("seleccionado");
      enlaces[k].parentNode.classList.add("seleccionado");
      enlaces[k].parentNode.classList.add("play");
      enlaces[k].classList.add("animate");

      cancion(enlaces[k], "#title");

      if ( this.played && typeof playPause == "object" && playPause.className != pause ) {
        playPause.className = pause;
      }
    }

    // Cuando la música finalice
    audio.onended = function () {

      if (k <= enlaces.length && !this.loop) {
        enlaces[k + 1].click();
      }
    }

    if (typeof repeat == "object") {
      repeat.onclick = function () {

        if ( audio.loop ) {
          audio.removeAttribute("loop");
          this.classList.remove("seleccionado");
        }else {
          audio.setAttribute("loop", "-1");
          this.classList.add("seleccionado");
        }
      }
    }

    var random = document.querySelector("#random");
    if ( typeof random == "object" ) {
      random.onclick = function () {
        alert("Todavía no se encuentra disponible.\nMuy pronto se podrá disfrutar de esta opción.")
      }
    }
  }

  bool = ( typeof audio == "object" ) && ( typeof playPause == "object" );

  if ( bool ) {
    playPause.onclick = function () {
      if ( audio.paused ) {
        this.className = pause;
        audio.play();
      }else {
        this.className = play;
        audio.pause();
      }
    }

    // Evento de teclado aplicado al reproductor
    onkeydown = function (e) {
      e.preventDefault();

      switch (e.which || e.keyCode ) {
        case 32: // Barra espaciadora
          
          if ( audio.paused ) {
            audio.play();
          }else {
            audio.pause();
          }

          break;

        case 38: // UP
          audio.volume += 0.05;
          break;

        case 40: // DOWN
          audio.volume -= 0.05;
          break;
        
        case 82: // Letra R
          if (repeat !== null) {
            repeat.click();
          }
          break;
        
        case 13: // ENTER
          alert(enlaces[10].textContent);
          break;
        default:
          // alert(e.which || e.keyCode);
          break;
      }
    }
  }
  
};
