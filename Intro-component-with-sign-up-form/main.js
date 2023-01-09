const btn = document.querySelector(".btn");

var empty = "";

//crearemos funciones que validen cada campo

btn.addEventListener("click", function () {
  //name
  let name = document.querySelector(".name").value;
  let nalert = document.querySelector(".nme");

  //lastname
  let lname = document.querySelector("#lastname").value;
  let lnalert = document.querySelector(".lstn");

  //password

  let password = document.querySelector(".password").value;
  let passalert = document.querySelector(".pass");

  //Email
  let email = document.querySelector(".email").value;
  let emailalet = document.querySelector(".em");
  let regex = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (
    name === empty ||
    lname === empty ||
    password === empty ||
    !regex.test(email)
  ) {
    console.log("invalido");
    nalert.style.visibility = "visible";
    lnalert.style.visibility = "visible";
    passalert.style.visibility = "visible";
    emailalet.style.visibility = "visible";
    return false;
  } else {
    console.log("valid");
    nalert.style.visibility = "hidden";
    lnalert.style.visibility = "hidden";
    passalert.style.visibility = "hidden";
    emailalet.style.visibility = "hidden";
    return true;
  }
});
