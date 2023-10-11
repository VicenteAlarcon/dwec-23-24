let parrafo = document.getElementById("parrafo")
let pantalla = document

pantalla.onmousemove = (event) => {parrafo.textContent = "Posición x: "+event.clientX+" Posición Y: "+event.clientY}

