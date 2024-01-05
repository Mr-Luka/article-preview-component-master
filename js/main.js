const share = document.querySelector(".share");

const shareIconsMob = document.querySelector(".share-icons");

const shareIconsDesk = document.querySelector(".popup-desktop");

const nameAvatar = document.querySelector(".name-avatar")


share.addEventListener("click", function(){
    shareIconsMob.classList.remove("hide");
    nameAvatar.classList.add("hide");
    if(window.innerWidth > 1440){
        shareIconsMob.classList.add("hide");
        nameAvatar.classList.remove("hide");
    }
})


