/**
 * @license Mozilla Public License Version 2.0
 * @author David E Luna M <davidlunamontilla@gmail.com>
 * @copyright David E Luna M, 2020
 * @version v0.0.1
 * 
 * @param {URL} URL 
 * @param {Function} fn 
 * @param {string | HTMLElement} element 
 * @export ajax
 */

const ajax = ( URL, fn, element ) => {
  let request = new XMLHttpRequest();
  request.open( "GET", URL, true );

  if ( typeof fn !== "function" ) return;
  if ( typeof element === "string" ) element = document.querySelector( element );

  request.onreadystatechange = ( event ) => {
    if ( request.readyState == XMLHttpRequest.DONE ) if ( request.status == 200) {
      fn( event, request.responseText );
    }
  }

  request.send(null);
};

export { ajax };