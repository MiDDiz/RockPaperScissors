const btnPiedra = document.querySelector(`button[value="piedra"]`);
const btnPapel = document.querySelector("button[value=\"papel\"]");
const btnTijera = document.querySelector("button[value=\"tijera\"]");
const txtResultado = document.querySelector("#resultado");
const divResultado = document.querySelector("div.resultado");
const spanPuntosJgador = document.querySelector("#puntosJugador");
const spanPuntosOrdenador = document.querySelector("#puntosOrdenador");
let puntosJugador = 0;
let puntosOrdenador = 0;

let eleccionJugador;
let eleccionOrdenador;


function jugadaOrdenador(){
    /*Randomly returns rock, paper or scicors*/
    let jugada = Math.floor(Math.random() * 3) + 1;
    switch (jugada){
        case (1):
            jugada = "piedra";
            break;
        case (2):
            jugada = "papel";
            break;
        case (3):
            jugada = "tijera";
            break;
        default:
            console.log("Problema en jugadaOrdenador()");
            jugada = -1;
            break;
    }
    console.log("Ordenador escogió " + jugada);
    return jugada;
}

function processPlay(seleccionJugador, seleccionOrdenador){

    
    
    
    if (seleccionJugador === seleccionOrdenador){
        console.log(`draw. You both picked ${seleccionJugador}`);
        txtResultado.style.color = "blue";
    }
    else if((seleccionJugador === "piedra")){
        switch(seleccionOrdenador){
            case "papel":
                console.log( `you lost. Computer picked ${seleccionOrdenador}`);
                puntosOrdenador++;
                txtResultado.style.color = "red";
                break;
            case "tijera":
                puntosJugador++;
                console.log( `you won. Computer picked ${seleccionOrdenador}.`);
                txtResultado.style.color = "green";
                break;
            }
    }
    else if(seleccionJugador === "papel"){
        switch(seleccionOrdenador){
            case "piedra":
                puntosJugador++;
                console.log( `you won. Computer picked ${seleccionOrdenador}.`);
                txtResultado.style.color = "green";
                break;
            case "tijera":
                console.log( `you lost. Computer picked ${seleccionOrdenador}`);
                puntosOrdenador++;
                txtResultado.style.color = "red";
                break;
            }
    }
    else if(seleccionJugador === "tijera"){
        switch(seleccionOrdenador){
            case "piedra":
                console.log( `you lost. Computer picked ${seleccionOrdenador}`);
                puntosOrdenador++;
                txtResultado.style.color = "red";
                break;
            case "papel":
                puntosJugador++;
                console.log( `you won. Computer picked ${seleccionOrdenador}.`);
                txtResultado.style.color = "green";
                break;
            }
    }
    else{
        console.log("Error in function processPlay()");
    }
    console.log(`Player selection = ${seleccionJugador}\nComputer selection = ${seleccionOrdenador}`);
    administrarTexto(seleccionJugador, seleccionOrdenador);
    

}

function administrarTexto(seleccionJugador, seleccionOrdenador){
    spanPuntosJgador.textContent = puntosJugador;
    spanPuntosOrdenador.textContent = puntosOrdenador;
    divResultado.textContent = `Tu elegiste ${seleccionJugador} y el ordenador escogió ${seleccionOrdenador}` ;
    if(puntosJugador >= 5 || puntosOrdenador >= 5){
        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;
        
        puntosJugador >= 5 ? divResultado.innerHTML = divResultado.textContent + "<br>Has Ganado!" : divResultado.innerHTML = divResultado.textContent + "<br>Has Perdido :(" ;
        return
    }
    
    

}

btnPiedra.addEventListener("click", (e) =>{
    
    processPlay("piedra", jugadaOrdenador());
    
});
btnPapel.addEventListener("click", () => {
    
    processPlay("papel", jugadaOrdenador());
    
});
btnTijera.addEventListener("click", () => {
    
    processPlay("tijera", jugadaOrdenador());
    
});
