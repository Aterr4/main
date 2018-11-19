window.onscroll = function(){stickFunction()};
var navbar = document.getElementById("navb");
var sticky = navbar.offsetTop;

function stickFunction(){
    if(window.pageYOffset > sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}