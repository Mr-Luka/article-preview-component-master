const share = document.querySelector(".share");

const shareIconsMob = document.querySelector(".share-icons");

const shareIconsDesk = document.querySelector(".popup-desktop");

const nameAvatar = document.querySelector(".name-avatar")

const triangle = document.querySelector(".triangle");


share.addEventListener("click", function(){
    shareIconsMob.classList.remove("hide");
    nameAvatar.classList.add("hide");
    if(window.innerWidth > 1440){
        shareIconsMob.classList.add("hide");
        nameAvatar.classList.remove("hide");
        triangle.classList.remove("hide");
        shareIconsDesk.classList.remove("hide");
    } else {
    shareIconsMob.classList.remove("hide");
        nameAvatar.classList.add("hide");
        triangle.classList.add("hide");

        shareIconsDesk.classList.add("hide");
    }
})

window.addEventListener("resize", function(){
    if(window.innerWidth <= 1440){
        shareIconsMob.classList.remove("hide");
        nameAvatar.classList.add("hide");
        triangle.classList.add("hide");

        shareIconsDesk.classList.add("hide");
    } else {
        shareIconsMob.classList.add("hide");
        nameAvatar.classList.remove("hide");
        
    }
});


