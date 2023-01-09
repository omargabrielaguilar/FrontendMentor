const btn = document.querySelector("#btn-share")
const share = document.querySelector(".share")
const show = document.querySelector(".show")

btn.addEventListener("click", function(){
    share.classList.toggle("show");
});

function setNewVisible() {
    if(show.style.visibility === "hidden"){
        show.style.visibility = "visible";
    } else {
        show.style.visibility = "hidden";
    }
}


function setNewImage() {
    document.getElementById("hoveriano").src="./images/icon-share-foot.svg"
}

function setOldImage() {
    document.getElementById("hoveriano").src="./images/icon-share.svg"
}
    

