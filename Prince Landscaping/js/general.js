function displayMenu(){
    const menu = document.getElementById("menu").style.display;
    if (menu == "none"){
        menu = "flex";
    }
    else {
        menu = "none";
    }
   
}

function changeMenu(){
    const hamburger = document.getElementById("hamburger-icon").style.display;
    const media = window.matchMedia("(min-width: 780px)");
    if (hamburger == "none" && media.matches){
        const menu = document.getElementById("menu").style.display;
        menu = "flex";
    }
   
}

