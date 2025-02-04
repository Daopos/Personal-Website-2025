const navbar = document.getElementsByTagName('nav')[0]; 

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        console.log("It's working");
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
