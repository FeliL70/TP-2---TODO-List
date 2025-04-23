let TODO= [];


const agregartarea = () => {
let Tarea = document.getElementById("tarea").value 
TODO.push({
    texto: Tarea,
    estaTachado: false,
    fechaCreacion: new Date (),
    fechaTachado: null
    }
);
}

const Mostrartareas = ()=>{
document.getElementById("listado").innerHTML = ""; 
TODO.forEach(T=>{
document.getElementById("listado").innerHTML += '<input type="checkbox" id="botonchequeo" name="tarea" value="lo hice">'+ `<li style:${T.texto}   >${T.texto}</li>`;
for(let i = 0; i< TODO.length; i++){
let checked=  "";
let fechaTachado = lista[i].fechaTachado = `(Tachado: ${TODO[i].fechaTachado.toLocaleString()})`
if(lista[i].estaMarcado){
checked = "checked";
if(!TODO[i].fechaTachado){
lista[i].fechaTachado = new Date();
}
}
}
})
}

function chequedo(indice){
  TODO[indice].estaMarcado = !TODO[indice].estaMarcado;
  Mostrartareas()
}


    

 
