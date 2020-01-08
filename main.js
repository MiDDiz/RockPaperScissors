const btnPiedra = document.querySelector(`button[value="piedra"]`);
const btnPapel = document.querySelector("button[value=\"papel\"]");
const btnTijera = document.querySelector("button[value=\"tijera\"]");
const txtJugador = document.querySelector("#eleccionJugador");
const txtOrdenador = document.querySelector("#eleccionOrdenador");
const txtResultado = document.querySelector("#resultado");
const divResultado = document.querySelector("div.resultado");
let puntosJugador = 0;
let puntosOrdenador = 0;


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
            break;
    }
    console.log("Ordenador escogió " + jugada);
    return jugada;
}
function processPlay(seleccionJugador, seleccionOrdenador){

    txtJugador.textContent = seleccionJugador;
    txtOrdenador.textContent = seleccionOrdenador;
    
    if (seleccionJugador === seleccionOrdenador){
        console.log(`Oh, looks like a draw. You both picked ${seleccionJugador}`);
        return "Empate!"
    }
    else if((seleccionJugador === "piedra")){
        switch(seleccionOrdenador){
            case "papel":
                console.log( `Oh, looks like you lost. Computer picked ${seleccionOrdenador}`);
                puntosOrdenador++;
                return "Tu pierdes!"
            case "tijeras":
                puntosJugador++;
                console.log( `Oh, you won... Computer picked ${seleccionOrdenador}. Congrats, I guess...`);
                return "Tu ganas!"
            }
    }
    else if(seleccionJugador === "papel"){
        switch(seleccionOrdenador){
            case "piedra":
                puntosJugador++;
                console.log( `Oh, you won... Computer picked ${seleccionOrdenador}. Congrats, I guess...`);
                return "Tu ganas!"
            case "tijeras":
                console.log( `Oh, looks like you lost. Computer picked ${seleccionOrdenador}`);
                puntosOrdenador++;
                return "Tu pierdes!"
            }
    }
    else if(seleccionJugador === "tijera"){
        switch(seleccionOrdenador){
            case "piedra":
                console.log( `Oh, looks like you lost. Computer picked ${seleccionOrdenador}`);
                puntosOrdenador++;
                return "Tu pierdes!"
            case "papel":
                puntosJugador++;
                console.log( `Oh, you won... Computer picked ${seleccionOrdenador}. Congrats, I guess...`);
                return "Tu ganas!"
            }
    }
    else{
        console.log("Error in function processPlay()");
    }
    console.log(`Player selection = ${seleccionJugador}\nComputer selection = ${seleccionOrdenador}`);
    

}

function administrarTexto(){
    if(puntosJugador >= 5 || puntosOrdenador >= 5){
        btnPiedra.disabled = true;
        btnPapel.disabled = true;
        btnTijera.disabled = true;
        
        puntosJugador >= 5 ? txtResultado.textContent = "Has Ganado!" : txtResultado.textContent = "Has Perdido :(" ;
    }
}

btnPiedra.addEventListener("click", (e) =>{
    
    processPlay("piedra", jugadaOrdenador());
    administrarTexto();
});
btnPapel.addEventListener("click", () => {
    
    processPlay("papel", jugadaOrdenador());
    administrarTexto();
});
btnTijera.addEventListener("click", () => {
    
    processPlay("tijera", jugadaOrdenador());
    administrarTexto();
});