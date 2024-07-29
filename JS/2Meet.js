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

/* ******************************************************************************************* */
/* Search Bar Script */
/* ******************************************************************************************* */

// Globalne zmienne
let matchingPosts = []; // Tablica do przechowywania pasujących postów
let currentIndex = 0;   // Indeks aktualnie wyświetlanego postu

// Funkcja filtru postów na podstawie fragmentu tekstu
function filterPosts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const posts = document.querySelectorAll('.post');
    matchingPosts = []; // Resetowanie listy pasujących postów
    currentIndex = 0;   // Resetowanie indeksu

    posts.forEach(post => {
        // Pobieranie danych z atrybutów lub treści postu
        const name = post.getAttribute('data-name') ? post.getAttribute('data-name').toLowerCase() : '';
        const time = post.getAttribute('data-time') ? post.getAttribute('data-time').toLowerCase() : '';
        const date = post.getAttribute('data-date') ? post.getAttribute('data-date').toLowerCase() : '';
        const contentLessElement = post.querySelector('.post-content.less');
        const contentMoreElement = post.querySelector('.post-content.more');
        const contentLess = contentLessElement ? contentLessElement.textContent.toLowerCase() : '';
        const contentMore = contentMoreElement ? contentMoreElement.textContent.toLowerCase() : '';

        // Sprawdzanie, czy którykolwiek z elementów pasuje do wpisanego fragmentu
        if (
            name.includes(searchInput) || 
            time.includes(searchInput) || 
            date.includes(searchInput) || 
            contentLess.includes(searchInput) || 
            contentMore.includes(searchInput)
        ) {
            post.style.display = ''; // Upewnienie się, że post jest widoczny
            matchingPosts.push(post); // Dodanie pasującego posta do tablicy
        } else {
            post.style.display = 'none'; // Ukrycie niepasujących postów
        }
    });

    // Jeśli są pasujące posty, przewiń do pierwszego
    if (matchingPosts.length > 0) {
        scrollToPost(matchingPosts[currentIndex]);
    } else {
        alert('No posts match your search criteria.');
    }
}

// Funkcja przewijania do określonego posta
function scrollToPost(post) {
    post.scrollIntoView({ behavior: 'smooth', block: 'start' });
    post.classList.add('flash');
    setTimeout(() => post.classList.remove('flash'), 500); // Usuń efekt migania po animacji
}

// Funkcja przechodzenia do następnego pasującego posta
function nextPost() {
    if (matchingPosts.length === 0) return; // Brak pasujących postów
    currentIndex = (currentIndex + 1) % matchingPosts.length; // Przejdź do następnego posta (cyklicznie)
    scrollToPost(matchingPosts[currentIndex]);
}

// Funkcja przechodzenia do poprzedniego pasującego posta
function prevPost() {
    if (matchingPosts.length === 0) return; // Brak pasujących postów
    currentIndex = (currentIndex - 1 + matchingPosts.length) % matchingPosts.length; // Przejdź do poprzedniego posta (cyklicznie)
    scrollToPost(matchingPosts[currentIndex]);
}

// Inicjalizacja nasłuchiwania zdarzeń
document.getElementById('search-input').addEventListener('keyup', filterPosts);
document.getElementById('next-post-btn').addEventListener('click', nextPost);
document.getElementById('prev-post-btn').addEventListener('click', prevPost);








