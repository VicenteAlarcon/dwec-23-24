let palabra = "casa";
let lista = "";
let tonica = 0;

const diccionario = new Set([
  { palabra: "casa", silabas: ["ca", "sa"], tonica: 1 },
]);

for (valor of diccionario) {
  tonica = valor.tonica;
  lista = valor.silabas;
}

let cadena = lista.join('');
console.log(cadena)


function extraeUltimaVocal(silaba) {
  let vocales = ["a", "e", "i", "o", "u"];
  let ultima_vocal = "";
  for (dato of silaba) {
    for (vocal of vocales) {
      if (dato == vocal ) {
        ultima_vocal += dato;
      }
    }
  }
  return ultima_vocal;
}

function stringApartirDeTonica(cadena, tonica, silaba){
 let subcadenaAEliminar ='ca'
 let cadenaSinTonica = cadena.split(subcadenaAEliminar);
 console.log(cadenaSinTonica)

}

let cadenaSinTon = stringApartirDeTonica(lista, tonica)

console.log(cadenaSinTon)
