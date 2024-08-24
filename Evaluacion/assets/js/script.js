//TIPEO NORMAL 
const h1 = document.querySelector(".text"),
texto = "Yordan Solis Hermosilla";

function efectoTextTyping(elemento,texto,i = 0) {
    elemento.textContent += texto[i]

    if (i == texto.length-1) return;

    setTimeout(() => efectoTextTyping(h1,texto,i + 1), 100);

}

efectoTextTyping(h1,texto)



//TIPEO CON restroseso y scripts añadidos
$(document).ready(function(){
    

  

    // especificaciones para el tipeo
    var typedOptions = {
        strings: ["Sobre mi"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    var texto = new Typed(".texto", typedOptions);


    
});


   
