// show//
const nav = document.querySelector('.nav-menu');
const toggle =document.querySelector('.nav-toggle');
toggle.onclick =function(){
    nav.classList.toggle('show-nav')
}
//remove//
const navlink =document.querySelectorAll('.nav-link')
function linkAction(){
    const navmenu = document.querySelector('.nav-menu')
    navmenu.classList.remove('show-nav')
}
navlink.forEach(n =>n.addEventListener('click',linkAction))

//change active//
const linkcolor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(linkcolor){
        linkcolor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkcolor.forEach(L => L.addEventListener('click',colorLink))



// scorll//
function scorllHeader(){
    const scorllHeader = document.getElementById('header')
    if(this.scrollY >= 200){
        scorllHeader.classList.add('scroll-header')
    }
    else{
        scorllHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scorll' ,scorllHeader);