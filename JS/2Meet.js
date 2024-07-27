/* ******************************************************************************************* */
/* Mobile Nav Script */
/* ******************************************************************************************* */

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

/* ******************************************************************************************* */
/* Loader Script */
/* ******************************************************************************************* */

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // Dopasuj czas do długości animacji
});

/* ******************************************************************************************* */
/* Roll Back Script */
/* ******************************************************************************************* */

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Pokaż przycisk po przewinięciu 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
