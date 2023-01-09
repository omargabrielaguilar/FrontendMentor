// creamos la variable container
const mainContainer = document.querySelector(".container")
// creamos la variable thankyou
const thanksContainer = document.querySelector(".thank-you")
// creamos la variable desde el boton submit
const submitButton = document.getElementById("submit-rating")
// creamos la variable desde el boton submit
const ratings = document.querySelectorAll(".btn")
// creamos la variable desde el boton submit
const actualRating = document.getElementById('rating')

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})

