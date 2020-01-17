class nodo {
  constructor() {}

  // Crear un nodo
  create = (__element, otherElement = undefined ) => {
    if ( typeof __element === "undefined" )
      return null;
    
     // Crear Nodo:
    let element = document.createElement( __element );

    // Insertar nodo en un elemento:
    if ( typeof otherElement !== "undefined" )
      otherElement.appendChild( element );

    return element;
  }

  // ARRAYS:
  link = ( json ) => {
    if ( typeof json === "undefined" )
      return null;

    let arrayNode = [];

    if ( json.length > 0 )
      json.forEach( (element, key ) => {
        arrayNode[key] = this.create( "a" );

        if ( typeof element.href !== "undefined" )
          arrayNode[key].href = element.href;
          
        if ( typeof element.target !== "undefined" )
          arrayNode[key].target = element.target;
          
        if ( typeof element.className !== "undefined" )
          arrayNode[key].className = element.className;

        if ( typeof element.textContent !== "undefined" )
          arrayNode[key].textContent = element.textContent;
      });

    return arrayNode;
  }

  // Mover Nodos:
  move = ( element, otherElement ) => {
    if ( typeof element === "undefined" || typeof otherElement === "undefined" )
      return false;

    if ( element === null || typeof otherElement.appendChild === "undefined" )
      return false;

    otherElement.appendChild( element );
    return true;
  }
}

export { nodo }