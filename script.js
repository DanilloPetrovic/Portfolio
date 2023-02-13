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

let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

header.classList.add('header-fade');
main.classList.add('main-fade');
footer.classList.add('footer-fade');

// Function for contact

let contact_button = document.querySelector('.section-four-button');

contact_button.addEventListener('click', () => {

    let name_element = document.querySelector('.input-name');
    let Email_element = document.querySelector('.input-email');
    let message_element = document.querySelector('.input-message');

    let name = document.querySelector('.input-name').value;
    let Email = document.querySelector('.input-email').value;
    let message = document.querySelector('.input-message').value;

    let IndexAt = Email.indexOf("@"); // Uzimanje Indexa '@'
    let PosleAt = Email.substring(IndexAt+1); // Uzimanje texta posle '@'
    let IndexTacka = PosleAt.indexOf("."); // Uzimanje Indexa tacke posle '@'
    let PreAt = Email.substring(0,IndexAt); // Uzimanje texta pre '@'
    let DuzinaPreAt = PreAt.length; // Uzimanje duzine texta pre '@'
    let IzmedjuAtTacka = Email.substring(IndexAt+1, DuzinaPreAt+IndexTacka+1); // Izimanje texta izmedju '@' i '.'
    let PosleTacke = Email.substring(DuzinaPreAt+1+IndexTacka+1); // Uzimanje texta posle ','
    let IndexTackePosleAt = DuzinaPreAt+IndexTacka+1; // Uzimanje indexa tacka posle '@' + DuzinaPreAt
    let Obavestenje = document.querySelector('#obavestenje'); // Uzimanje p
    let btnregister = document.querySelector('.registerbtn'); // Uzimanje register dugmeta

    let valid_name = false;
    let valid_email = false;
    let valid_message = false;

    if(name.length == 0){
        name_element.style.border = '2px solid red';
        alert("The name field must not be empty!");
        let valid_name = false;
    } else if(name.length > 0){
        name_element.style.border = 'none';
        valid_name = true;
    }

    if(Email.includes("@") && Email.includes(".") && (IzmedjuAtTacka === 'gmail' || IzmedjuAtTacka === 'hotmail') && PosleTacke === 'com' && PreAt.length > 4){
        Email_element.style.border = "none";
        valid_email = true;
    } else{
        Email_element.style.border = '2px solid red'
        alert("Your email is not valid!");
        let valid_email = false;
    }

    if(message.length == 0){
        message_element.style.border = '2px solid red';
        alert("The message field must not be empty!");
        let valid_message = false;
    } else if(message.length > 0){
        message_element.style.border = 'none';
        valid_message = true;
    }

    if(valid_name === true && valid_email === true && valid_message === true){
        alert("Thank you for contact us!");
    }
});

// Function for reload

window.onbeforeunload = () => {
    window.scrollTo(0,0);
};