function Saludos() {
 let parrafo = document.getElementById("pa");
 let nombre = parrafo.dataset.nombre;
 let edad = parrafo.dataset.edad;
 //console.log(nombre)
 alert(nombre + " tiene " + edad + " años de edad");
}