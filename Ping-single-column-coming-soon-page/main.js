//Mobile
const btn = document.querySelector(".btn");
const message = document.querySelector(".ph");
const border = document.querySelector(".border");
const email = document.querySelector(".email");

function validateEmail() {
  message.classList.toggle("advertencia");
  var advertencia = document.querySelector(".advertencia");

  var valor =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!email.value.match(valor)) {
    document.querySelector(".advertencia").style.display = "block";
    border.style.borderColor = "hsl(354, 100%, 66%)";
    advertencia.style.visibility = "hidden";

    if (advertencia.style.visibility === "hidden") {
      document.querySelector(".advertencia").style.marginBottom = "12px";
      advertencia.style.visibility = "visible";
    }
  } else {
    document.querySelector(".advertencia").style.display = "none";
    border.style.borderColor = "hsl(223, 100%, 88%)";
    btn.type="button"
    alert("Congratulation")
    btn.type="submit"
  }
}

