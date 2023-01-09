const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let email = document.querySelector(".email").value;
  let emailalet = document.querySelector(".em");
  let regex = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if(!regex.test(email)){
    emailalet.style.visibility = "visible";
    return false;
  } else {
    emailalet.style.visibility = "hidden";
    return true;
  }
})