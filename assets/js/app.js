var menuToggle,
    hamburger,
    nav;
menuToggle = document.getElementById('menuToggle');
nav = document.getElementById('nav');
hamburger = document.getElementById('hamburger');
menuToggle.onclick = function(){
    nav.classList.toggle('menu-toggle');
    hamburger.classList.toggle('toggle');
    
}