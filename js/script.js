//toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //activate links in navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate');
        }
    })

    //header sticky
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //footer animation
    //let footer = document.querySelector('footer');
    //footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

//form activate

const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#send-mail');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    const form = new FormData(this);
    console.log(form.get('emailSubject'), 'primer ejemplo')

    let name = form.get('name');
    let mail = form.get('email');
    let subject = form.get('emailSubject');
    let number = form.get('number');
    let message = form.get('message');

    $buttonMailTo.setAttribute('href', `mailto:maidanagabriel15@hotmail.com?Subject=${subject}&body=Name: ${name}%0D%0ANumber: ${number}%0D%0A%0D%0A${message}`)
    $buttonMailTo.click()
}