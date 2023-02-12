// Function for responsive navbar
let button = document.querySelector('.button-for-responsive-navbar');
let opened = 0; // if opened = 0 navbar is closed

let normal_navbar = document.querySelector('.navbar-header-div');
let responsive_navbar = document.querySelector('.responsive-header');

button.addEventListener('click', () => {
    if(opened == 0){
        responsive_navbar.style.display = 'block';
        opened = 1;
    } else if(opened == 1){
        responsive_navbar.style.display = 'none';
        opened = 0;
    }
});

// Functino sto scroll to sections

let about_navbar = document.querySelector('.li1');
let project_navbar = document.querySelector('.li2');
let contact_navbar = document.querySelector('.li3');

let about_responsive_navbar = document.querySelector('.li1-responsive');
let project_responsive_navbar = document.querySelector('.li2-responsive');
let contact_responsive_navbar = document.querySelector('.li3-responsive');

let about_section = document.querySelector('.section-two-main');
let project_section = document.querySelector('.section-three-main');
let contact_section = document.querySelector('.section-four-main');

about_navbar.addEventListener('click', () => {
    about_section.scrollIntoView({ behavior: 'smooth' });
});

about_responsive_navbar.addEventListener('click', () => {
    about_section.scrollIntoView({ behavior: 'smooth' });
});

project_navbar.addEventListener('click', () => {
    project_section.scrollIntoView({ behavior: 'smooth' });
});

project_responsive_navbar.addEventListener('click', () => {
    project_section.scrollIntoView({ behavior: 'smooth' });
});

contact_navbar.addEventListener('click', () => {
    contact_section.scrollIntoView({ behavior: 'smooth' });
});

contact_responsive_navbar.addEventListener('click', () => {
    contact_section.scrollIntoView({ behavior: 'smooth' });
});

// Functions for smooth loading

let section_one_h1 = document.querySelector('.section-one-h1');
let section_two_p = document.querySelector('.section-two-p');
let section_two_photo = document.querySelector('.section-two-photo');
let section_three_project_one = document.querySelector('.section-three-project-one');

section_one_h1.classList.add('section-one-h1-fade');
section_two_p.classList.add('section-two-p-fade');
section_two_photo.classList.add('section-two-photo-fade');

window.onscroll = () => {
    let section_three_for_animation = document.querySelector('.section-three-main');
    let section_three_for_animation_position = section_three_for_animation.getBoundingClientRect().top;
    
    let section_one_for_animation = document.querySelector('.section-one-main');
    let section_one_for_animation_position = section_one_for_animation.getBoundingClientRect().top;

    let screen_position = window.innerHeight;

    if(screen_position <= section_one_for_animation_position){
        section_two_p.classList.add('section-two-p-fade');
    }

    if(screen_position <= section_three_for_animation_position){
        section_three_project_one.classList.add('section-three-project-one-fade');
    }
};