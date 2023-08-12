 let menuIcon = document.querySelector('#icon1');
let navbar = document.querySelector('.navbar');

icon1.onclick = () => {
    icon1.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top >= offset && top <= offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            sec.classList.add('show-ani');
        }
        });

        icon1.classList.remove('bx-x');
    navbar.classList.remove('active');
}