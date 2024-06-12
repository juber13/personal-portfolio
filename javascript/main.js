$(document).ready(function () {

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault(); 

        var target = this.hash;
        console.log(target); 
        var $target = $(target);
        if(target == "#about"){
            $("html,body").animate({scrollTop: $target.offset().top - 100 },100,"swing");
        }else{
            $("html,body").animate({scrollTop: $target.offset().top},100,"swing");
        }
    });

    $("#menu-bar").on("click", function () {
        $('.menu').toggleClass('active');
    })
});

// make funtio fot going to top
var goToTopButton = document.getElementById('goToTop');
 
window.addEventListener('scroll',function(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        goToTopButton.classList.add('addTopClass')
    }else{
        goToTopButton.classList.remove('addTopClass');
    }
})

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTop(0, 0);
}

goToTopButton.addEventListener("click" , goToTop);

// make function for typewriter in js

var i = 0;
window.addEventListener("load", typeWriter);

var text = "Front-End developer, CodeNewbie, Free Code Camper, Wanna be full stack developer";
function typeWriter() {
    if (i < text.length) {
        document.getElementById('showText').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}
