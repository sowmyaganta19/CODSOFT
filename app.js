let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
// adding togging effect for navbar
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header navbar a ');

// adding scrolling to navbar automatically
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlink.forEach(lin=>{
                lin.classList.remove('active');
                document.querySelector(`header navbar a[href*=${id}]`).classList.add('active');
            })
        }
    })
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal for effectiveness
ScrollReveal({
    // reset : true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// adding of scrolling effects to page
ScrollReveal().reveal('header',{origin:'top'})
ScrollReveal().reveal('.social-media,.about-content,.skill-content,.project-box,.scroll-container,footer',{origin:'bottom'});
ScrollReveal().reveal('.btn,.home-content h3,.about-img,.skills h1,.heading,.input-box',{origin:'left'})
ScrollReveal().reveal('.home-content p,.about p,.home h1,.home-img,.certificate-box h3,textarea',{origin:'right'})
