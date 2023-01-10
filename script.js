let cartas = document.querySelectorAll(".carta");
let botonNiveles = document.querySelectorAll("button");
// let figuras=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
let figuras=[];
let grilla = document.querySelector(".grilla");
let contador = 0;
let carta1 = "";
let carta2 = "";
let puntaje = 0;
let botonmezclar = document.querySelector(".mezclar");

let borroArray = () => {
    figuras = [];
};


let nivel = () => {
    // console.dir(event.path[0].classList.value);
resetear();

for (i of cartas){
    i.classList.add("desactivada")
};


let nivelElegido = event.path[0].classList.value
    if (nivelElegido=="principiante") {
        for (let i = 0; i < 16; i++) {
        cartas[i].classList.remove("desactivada")            
        }
        grilla.classList.remove("intermedio")
        grilla.classList.add("principiante")
        for (let i = 1; i <= 17; i++) {
            numero = i%9
            if(numero==0){

            }else{
            figuras.push(numero)}
        }
    }

    if (nivelElegido=="intermedio")  {
        for (let i = 0; i < 24; i++) {
            cartas[i].classList.remove("desactivada")            
            }
        grilla.classList.remove("principiante")
        grilla.classList.add("intermedio")
        for (let i = 1; i <= 25; i++) {
            numero = i%13
            if(numero==0){

            }else{
            figuras.push(numero)}
        }


    };

    mezclar();

};


let vercarta = () =>{
let posicion = 0
if (contador<2) {
//    console.dir(event);
//    console.log(this);
//    console.log(event.path[0].id);
if(figuras.length==16){
        posicion = event.path[0].id-1;
        figura = figuras[posicion];
        event.path[0].classList.add("_"+figura);
};
if(figuras.length==24){
        posicion = event.path[0].id-1;
        figura = figuras[posicion];
        event.path[0].classList.add("_A"+figura);
};


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

if (figuras.length==16 && puntaje==16){
        alert("GANASTE!!!")
        resetear();

    }    

if (figuras.length==24 && puntaje==24) {
        alert("GANASTE!!!")
        resetear();
    }

};

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


for(i of botonNiveles){
    i.addEventListener("click", nivel)
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

let resetear = () =>{
    // for ( i of cartas) {
    //     clase2 = i.classList.item(2)
    //     i.classList.remove(clase2);
    
    //     clase1 = i.classList.item(1)
    //     i.classList.remove(clase1)
    // }

for (let i = 0; i < figuras.length; i++) {

    clase2 = cartas[i].classList.item(2)
    cartas[i].classList.remove(clase2);
    
    clase1 = cartas[i].classList.item(1)
    cartas[i].classList.remove(clase1)
    
}


    borroArray();
contador = 0;
carta1 = "";
carta2 = "";
puntaje = 0;

}

let mezclar = () => {
figuras.sort(() => Math.random() > 0.5 ? 1 : -1);
};

// botonmezclar.addEventListener("click", darVuelta);

window.onload = mezclar;
