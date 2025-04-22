const selectArmas=document.getElementById("select-armas")
const armeria = document.getElementById("armeria")
selectArmas.addEventListener("change",()=>{
  switch (selectArmas.value) {
    case "arma1":
      armeria.style.backgroundImage="url('../../assets/img/kilo.webp')"
      break;
    case "arma2":
      armeria.style.backgroundImage = "url('../../assets/img/ak47.webp')"
      break;
    case "arma3":
      armeria.style.backgroundImage = "url('../../assets/img/riveter.webp')"
      break;
    case "arma4":
      armeria.style.backgroundImage = "url('../../assets/img/MP5.webp')"
      break;
    case "arma5":
      armeria.style.backgroundImage = "url('../../assets/img/SVA545.jpg')"
      break;
    

    default:

      break;
  }
})