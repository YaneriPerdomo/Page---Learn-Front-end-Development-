
let img_dev = document.querySelector(".img_dev")
const img_dev_3 = document.querySelector(".img_dev_3");
const img_dev_2 = document.querySelector(".img_dev_2");
const img_dev_0 = document.querySelector(".img-dev_0");
const img_dev_1 = document.querySelector(".img_dev_1");
const window = document.querySelector(".container-modal-iniciar");
document.addEventListener("click",(e) => {
    if(e.target.matches(".img_dev_2")){
        img_dev.setAttribute("src","./img/Dev.Fron end.2.webp")
        img_dev_2.style.border = "solid grey 0.2rem"
        
        img_dev_1.removeAttribute("style");
        img_dev_3.removeAttribute("style")
        img_dev_0.removeAttribute("style")
    }
    if(e.target.matches(".img_dev_0")){
        img_dev.setAttribute("src","./img/dev.Front End.webp")
        
        img_dev_0.style.border = "solid grey 0.2rem"

        img_dev_2.removeAttribute("style");
        img_dev_3.removeAttribute("style")
        img_dev_1.removeAttribute("style")
    }
    if(e.target.matches(".img_dev_3")){
        img_dev.setAttribute("src","./img/Dev.fron end.3.webp")
         
        img_dev_3.style.border = "solid grey 0.2rem"
        img_dev_2.removeAttribute("style");
        img_dev_1.removeAttribute("style")
        img_dev_0.removeAttribute("style")
    }
    if(e.target.matches(".img_dev_1")){
        img_dev.setAttribute("src" , "./img/div.Fron End.1.webp")
      
        img_dev_1.style.border = "solid grey 0.2rem"

        img_dev_2.removeAttribute("style");
        img_dev_3.removeAttribute("style")
        img_dev_0.removeAttribute("style")
    }

    if(e.target.matches("#get")){
        const get = document.querySelector("#get");
      
        window.style.display = "flex"
    }

    if(e.target.matches(".close")){
        window.style.display = "none"
        const login = document.querySelector(".Fondo-Login");
        login.style.animation = "finish 3s linear 200ms 1 alternate both;"
    }

   

})

function stopLink(event) {
    event.preventDefault();
    let texto = "Hola, Me llamo Yaneri Perdomo";
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
    alert("Hello, i am: Yaneri Perdomo!")
   
  }


const get_d = document.querySelector("#get_discount")

get_d.addEventListener("click" , stopLink)
const btn_js = document.querySelector(".btn_js");



