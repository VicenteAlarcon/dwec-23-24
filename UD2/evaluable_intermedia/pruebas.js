let palabra = "casa";
let lista=""
let tonica =0;

const diccionario = new Set([
    {palabra:'casa', silabas:['ca', 'sa'], tonica:1}
])


for(valor of diccionario) {
     tonica = valor.tonica
     lista = valor.silabas
   }

   let principal = lista[tonica - 1];

 
 