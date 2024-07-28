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

/* ******************************************************************************************* */
/* Copy Discord Tag Script */
/* ******************************************************************************************* */

function copyDiscordTag(tag) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = tag;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    openModal();
}

function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'flex'; // Użyj flexbox, aby wyśrodkować modal
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // Dopasuj czas do długości animacji
});

/* ******************************************************************************************* */
/* Read More, Less Script */
/* ******************************************************************************************* */

function toggleExpand(element) {
    element.classList.toggle('expanded');
    const toggleText = element.querySelector('.text');
    const clickIcon = element.querySelector('.click-icon');

    if (element.classList.contains('expanded')) {
        toggleText.textContent = "Click To Read Less";
        clickIcon.classList.remove('fa-chevron-down');
        clickIcon.classList.add('fa-chevron-up');
    } else {
        toggleText.textContent = "Click To Read More";
        clickIcon.classList.remove('fa-chevron-up');
        clickIcon.classList.add('fa-chevron-down');
    }
}


/* ******************************************************************************************* */
/* Post Count Script */
/* ******************************************************************************************* */

document.addEventListener('DOMContentLoaded', () => {
    // Get the container that holds the posts
    const postsContainer = document.querySelector('.posts');

    // Function to update the post count
    const updatePostCount = () => {
        const postCount = postsContainer.querySelectorAll('.post').length;
        document.getElementById('post-count').textContent = postCount;
    };

    // Initial update of the post count when the page loads
    updatePostCount();
});

