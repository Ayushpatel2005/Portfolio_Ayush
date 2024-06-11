let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true,
})


let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')
window.addEventListener('scroll', function () {
    const scrollpos = this.window.scrollY
    sections.forEach(section => {
        if (scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});