document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const overlay = document.getElementById('overlay');

    const openMenu = () => {
        dropdownMenu.classList.add('show');
        overlay.classList.add('show');
    };

    const closeMenuFunc = () => {
        dropdownMenu.classList.remove('show');
        overlay.classList.remove('show');
    };

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openMenu();
    });

    closeMenu.addEventListener('click', closeMenuFunc);
    overlay.addEventListener('click', closeMenuFunc);
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scrollProgress').style.width = scrollPercent + '%';
});

// 🟣 INTERACCIÓN CON LA BURBUJA INTERACTIVA EN DESKTOP Y MÓVIL
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        if (interBubble) {
            interBubble.style.transform = `translate(${curX}px, ${curY}px)`;
        }

        requestAnimationFrame(move);
    }

    // 💻 Movimiento con mouse (desktop)
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    // 📱 Movimiento con touch (móvil/tablet)
    window.addEventListener('touchmove', (event) => {
        if (event.touches.length > 0) {
            const touch = event.touches[0];
            tgX = touch.clientX;
            tgY = touch.clientY;
        }
    }, { passive: true });

    move();
});

// 🟡 CURSOR CUSTOMIZADO CON DETECCIÓN INTERACTIVA
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mouseover", (e) => {
    const hovered = e.target;
    const isInteractive = hovered.matches("a, button, input, textarea, select, label, [data-interactivo], .hoverable")
        || getComputedStyle(hovered).cursor === "pointer";

    if (isInteractive) {
        cursor.classList.add("interactive");
    }
});

document.addEventListener("mouseout", () => {
    cursor.classList.remove("interactive");
});


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrusel-track');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;
    const slideWidth = 964;

    function updateCarrusel() {
        const offset = -currentIndex * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    function goToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrusel();
        }
    }

    function goToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarrusel();
        }
    }

    // Botones
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
});


// Mostrar la flecha cuando el usuario haga scroll hacia abajo
window.onscroll = function() {
    const scrollButton = document.getElementById("scrollToTop");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
};

// Hacer que la flecha lleve al principio cuando se hace clic
document.getElementById("scrollToTop").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
