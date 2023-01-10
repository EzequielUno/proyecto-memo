let cartas=document.querySelectorAll(".carta");
let figuras=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
let contador = 0;
let carta1 = "";
let carta2 = "";
let puntaje = 0;
let botonmezclar = document.querySelector(".mezclar");

let vercarta = () =>{
let posicion = 0
if (contador<2) {
//    console.dir(event);
//    console.log(this);
//    console.log(event.path[0].id);
posicion = event.path[0].id-1;
figura = figuras[posicion];
event.path[0].classList.add("_"+figura);
}

if (contador==0) {
    carta1 = figura;
    pos1 = posicion;
} else {carta2 = figura;
        pos2 = posicion};

contador++

if (contador==2) {
 if(validocartas()==true){
    // console.log("SON IGUALES"+pos1+" "+pos2);
    cartas[pos1].classList.add("encontrada")    
    cartas[pos2].classList.add("encontrada") 
    puntaje=puntaje+2;   

 } else {
    // console.log("SON DISTINTAS");
    setTimeout(() => {
        cartas[pos1].classList.remove(cartas[pos1].classList.item(1))
        cartas[pos2].classList.remove(cartas[pos2].classList.item(1))
      }, 1000);

 };
 contador=0

if(puntaje==16){
     alert("GANASTE!!!")
 }
}



};

let validocartas = () =>{
    if (carta1==carta2) {
        return true
    } else {
        return false
    }

}

for(i of cartas){
    i.addEventListener("click", vercarta)
};


//------NUMEROS ALEATORIOS------------
//let numero = (min,max) => {
//     return Math.floor((Math.random() * (max+1 -min)) +min);
// }
// let nuevo = numero(1, 24);

// for (let i = 0; i < 24; i++) {
//     figuras.push(nuevo)
// }

let darVuelta = () =>{
    for(i of cartas){
        let sacar = i.classList.item(1)
        if (sacar !=null) {
        i.classList.remove(sacar);        
        };
        // console.log(sacar)
    }
    mezclar();
}

// let puntos = () =>{

// for(i of cartas){
//     if(i.classList.item(2)=="encontrada"){
//     puntaje++}
// }
//     return puntaje
// }

let mezclar = () => {

figuras.sort(() => Math.random() > 0.5 ? 1 : -1);};

// botonmezclar.addEventListener("click", darVuelta);

window.onload = mezclar;
