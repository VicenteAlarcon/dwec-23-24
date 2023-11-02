import './style.css'

const botones = document.querySelectorAll('button[id^="Boton"]')

let lista = Array.from(botones)





function imprimirBoton(event){

 event.target.style.backgroundColor='blue';
}

function reaparecer(event){
event.target.style.backgroundColor='red'
}

for(const boton of botones) {
boton.addEventListener('click', imprimirBoton)
boton.addEventListener('mouseover', reaparecer)
}