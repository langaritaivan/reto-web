const selectArmas=document.getElementById("select-armas")
const armeria = document.getElementById("armeria")
selectArmas.addEventListener("change",()=>{
  switch (selectArmas.value) {
    case "arma1":
      armeria.style.backgroundImage="url('../../assets/img/kilo.jpg')"
      break;
    case "arma2":
      armeria.style.backgroundImage = "url('../../assets/img/ak47.jpg')"
      break;
    case "arma3":
      armeria.style.backgroundImage = "url('../../assets/img/riveter.jpg')"
      break;
    case "arma4":
      armeria.style.backgroundImage = "url('../../assets/img/MP5.jpg')"
      break;
    case "arma5":
      armeria.style.backgroundImage = "url('../../assets/img/SVA.jpg')"
      break;
    

    default:
      break;
  }
})