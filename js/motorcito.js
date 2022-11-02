var estadoLicuadora = "off"
var licuadora = document.getElementById("blender")
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora(){
    if(estadoLicuadora == "off"){
        estadoLicuadora = "on"
        /* console.log("Licuadora encendida"); */
        licuadora.classList.add("active");
        activarSonido()
    }else{
        estadoLicuadora = "off"
        /* console.log("Licuadora apagada"); */
        licuadora.classList.remove("active");
        activarSonido()
    }
}


function activarSonido(){
    if(sonidoLicuadora.paused){
        sonidoLicuadora.play();
        botonLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        /* sonidoLicuadora.currentTime = 0; */
    }
}


