/* Component nav bar click burger */
const burgerMenu = document.getElementById("burger-menu");

burgerMenu.addEventListener("click", openBurgerMenu);

function openBurgerMenu() {
  let mobileListNav = document.querySelector(".mobile-list_nav");

  if (mobileListNav.classList.toggle("visible")) {
    burgerMenu.src = "./images/icon-close-menu.svg";
  } else {
    burgerMenu.src = "./images/icon-hamburger.svg";
  }
}






/* Inicio Mastercrft Bamboo*/

/* Bookmark */
const ph_bookmark = document.querySelector("#ph_bookmark");
const button_bookmark = document.querySelector(".bookmark");

const img_bookmark = document.getElementById("img_bookmark");

button_bookmark.style.backgroundColor = "#e6e6e6";
button_bookmark.addEventListener("click", changeColorBookmark);

ph_bookmark.innerText = "Bookmark";

function changeColorBookmark() {
  if (button_bookmark.style.backgroundColor == "rgb(230, 230, 230)") {
    ph_bookmark.innerText = "Bookmarked";
    ph_bookmark.style.color = "white";
    button_bookmark.style.backgroundColor = "hsl(176, 50%, 47%)";
  } else {
    ph_bookmark.innerText = "Bookmark";
    ph_bookmark.style.color = "hsl(0, 0%, 48%)";
    button_bookmark.style.backgroundColor = "rgb(230, 230, 230)";
  }
}

/* Fin Mastercrft Bamboo*/







/* Open Main Modal*/

const btnBackThisProject = document.querySelector(".backThisProject");
const btnSelectRewardBlackEdition = document.querySelector(".btnBlackEdition");
const btnSelectRewardBambooEdition =
  document.querySelector(".btnBambooEdition");

btnBackThisProject.addEventListener("click", openMainModal);
btnSelectRewardBlackEdition.addEventListener("click", openMainModal);
btnSelectRewardBambooEdition.addEventListener("click", openMainModal);

const modalProject = document.querySelector(".modalProject");

const AboutProject = document.querySelector(".AboutProject");






/* Abrir Modal */
function openMainModal() {
  let container = document.querySelector(".container");
  modalProject.classList.remove("inactive");
  container.classList.add("black");
  AboutProject.classList.add("inactive");
}






/* Cerrar modal */

const iconCloseModal = document.querySelector(".iconCloseModal");

iconCloseModal.addEventListener("click", closeMainModal);

function closeMainModal() {
  let container = document.querySelector(".container");
  modalProject.classList.add("inactive");
  container.classList.remove("black");
  AboutProject.classList.remove("inactive");
}








/* Trabajar con el modal pledgeChooseIt y modalChooseIt */

const modalsChooseIt1 = document.querySelector(".modalsChooseIt1");
const modalsChooseIt2 = document.querySelector(".modalsChooseIt2");
const modalsChooseIt3 = document.querySelector(".modalsChooseIt3");

const cbm1 = document.querySelector(".cbm1");
const cbm2 = document.querySelector(".cbm2");
const cbm3 = document.querySelector(".cbm3");


cbm1.addEventListener("click", openPledge1);
cbm2.addEventListener("click", openPledge2);
cbm3.addEventListener("click", openPledge3);

const pledgeChooseItBlack = document.querySelector(".pledgeChooseItBlack");
const pledgeChooseItBamboo = document.querySelector(".pledgeChooseItBamboo");

modalsChooseIt1.style.borderColor = "rgb(230, 230, 230)";
modalsChooseIt2.style.borderColor = "rgb(230, 230, 230)";
modalsChooseIt3.style.borderColor = "rgb(230, 230, 230)";



function openPledge1() {
  let check1 = document.querySelector(".check1");
  check1.classList.toggle("inactive");

  if(modalsChooseIt1.style.borderColor == "rgb(230, 230, 230)") {
    modalsChooseIt1.style.borderColor = "#147B74";
    check1.classList.remove("inactive");
  } else {
    modalsChooseIt1.style.borderColor = "rgb(230, 230, 230)"
    check1.classList.add("inactive");
  }
}

function openPledge2() {
  let check2 = document.querySelector(".check2");

  if(modalsChooseIt2.style.borderColor == "rgb(230, 230, 230)") {
    modalsChooseIt2.style.borderColor = "#147B74";
    check2.classList.remove("inactive");
  pledgeChooseItBamboo.classList.remove("inactive");
  } else {
    modalsChooseIt2.style.borderColor = "rgb(230, 230, 230)"
    check2.classList.add("inactive");
  pledgeChooseItBamboo.classList.add("inactive");
  }
}

function openPledge3() {
  let check3 = document.querySelector(".check3");
  check3.classList.toggle("inactive");
  pledgeChooseItBlack.classList.toggle("inactive");

  if(modalsChooseIt3.style.borderColor == "rgb(230, 230, 230)") {
    modalsChooseIt3.style.borderColor = "#147B74";
    check3.classList.remove("inactive");
    pledgeChooseItBlack.classList.remove("inactive");
  } else {
    modalsChooseIt3.style.borderColor = "rgb(230, 230, 230)"
    check3.classList.add("inactive");
    pledgeChooseItBlack.classList.add("inactive");
  }
}








/* Matematicas en la recaudacion de fondos */

const recolectadoActual = document.getElementById('recolectadoActual')
const donantesActual = document.getElementById('donantesActual')
const bar = document.querySelector('.bar')

recolectadoActual.innerText = '89914'

donantesActual.innerText = '5007'

/* Bamboo */
const phFaltaBamboo = document.querySelector('.phFaltaBamboo')
const priceBamboo = document.querySelector('.priceBamboo')

phFaltaBamboo.innerText ='101'


/* Black */
const phFaltaBlack = document.querySelector('.phFaltaBlack')
const priceBlack = document.querySelector('.priceBlack')
phFaltaBlack.innerText ='64'


/* Thanks Modal */

const continueBamboo = document.querySelector('.continueBamboo')
const continueBlack = document.querySelector('.continueBlack')

const modalThanks = document.querySelector('.modalThanks')

continueBamboo.addEventListener('click', openThanksModalBamboo) 
continueBlack.addEventListener('click', openThanksModalBlack) 

function openThanksModalBamboo() {
  var total=89914;
  var donantes = 5007
  var restoBamboo = 101

  for(let i = 0; i < 1; i++) {
    if(priceBamboo.value <= 25){
      total = +priceBamboo.value + total
      donantes = donantes + 1
      
      restoBamboo = restoBamboo - 1
      modalThanks.classList.remove('inactive')
      modalProject.classList.add('inactive')

      recolectadoActual.innerText = total
    donantesActual.innerText = donantes
    phFaltaBamboo.innerText = restoBamboo
    } else {
      alert('Menor a 25')
    }
  }
}


function openThanksModalBlack() {
  var totalBlack=89914;
  var donantesBlack = 5007
  var restoBlack = 101

  for(let i = 0; i < 1; i++) {
    if(priceBlack.value <= 75){
      totalBlack = +priceBlack.value + totalBlack
      donantesBlack = donantesBlack + 1
      
      restoBlack = restoBlack - 1
      modalThanks.classList.remove('inactive')
      modalProject.classList.add('inactive')

      recolectadoActual.innerText = totalBlack
    donantesActual.innerText = donantesBlack
    phFaltaBamboo.innerText = restoBlack
    } else {
      alert('Menor a 75')
    }
  }
}

/* Close Thanks Modal */
const btnThanks = document.querySelector('.btn-Thanks')

btnThanks.addEventListener('click', closeThanks)

function closeThanks() {
  modalThanks.classList.add('inactive')
  let container = document.querySelector(".container");
  modalProject.classList.add("inactive");
  container.classList.remove("black");
  AboutProject.classList.remove("inactive");
  
}


