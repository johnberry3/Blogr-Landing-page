const bar = document.getElementById('menu-bar');
const mobileNav = document.querySelector('.Mobile-Navbar');
const dropDown = document.querySelector('.nav_down-Content'); 
const DropBtn = document.querySelector(".Arrow-light");


function openNav(){
    mobileNav.classList.toggle('show')
}

function DropDown(){
    dropDown.style.display ='block'
    body.style.display = 'none';
}

DropBtn.addEventListener('click',DropDown);
bar.addEventListener('click', openNav);