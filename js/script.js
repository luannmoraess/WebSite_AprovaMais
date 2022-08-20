
    window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
    
    })


    window.onload = function(){

        var tracinho = document.getElementsByClassName("tracinho")[0];
        tracinho.style.visibility = "visible"
        
        setInterval(function(){

            if (tracinho.style.visibility == "hidden"){
                tracinho.style.visibility = "visible";
            }
            else
            if (tracinho.style.visibility == "visible"){
                tracinho.style.visibility = "hidden";
            }
            }, 500);

    }
function teste(){
    var teste=document.getElementById("gmail")
    if (gmail.value==""){
        alert("Ops!, Algo está errado. Por favor verifique  o campo do formulario GMAIL");
        //teste.style.borderColor="red"
    }
    if (mensagem.value==""){
        alert("Ops!, Algo está errado. Por favor verifique o campo do formulario MENSAGEM")
        //teste.style.borderColor="red"
    }
    else{
        
        alert("Sua mensagem foi ENVIADA COM SUCESSO, nossa equipe irá responder em breve")
        teste.style.borderColor="black"
    }
}

