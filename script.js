//Toggle Icon NavBar

let menuIcon = document.querySelector('#menu-icon');
let navbars = document.querySelector('.navBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbars.classList.toggle('active')
}


//Scroll Section

let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if (top >= offset && top < offset + height){
            //active navBar Links

            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    //sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navBar when click navBar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbars.classList.remove('active')

}
