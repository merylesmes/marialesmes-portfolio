document.addEventListener("DOMContentLoaded", function () {
    const contactTrigger = document.getElementById("contactTrigger");
    const modal = document.getElementById("contactModal");
    const closeBtn = document.getElementById("closeModal");

    contactTrigger.addEventListener("click", function (e) {
        e.preventDefault();

        // Cerrar menú lateral si está abierto
        const dropdownMenu = document.getElementById('dropdownMenu');
        const overlay = document.getElementById('overlay');
        dropdownMenu.classList.remove('show');
        overlay.classList.remove('show');

        // Mostrar modal
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Ocultar modal
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none"; // Ocultar modal
        }
    });
});




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

//SCROLL BAR
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
    const isInteractive = hovered.closest("a, button, input, textarea, select, label, [data-interactivo], .hoverable")
        || getComputedStyle(hovered).cursor === "pointer";

    if (isInteractive) {
        cursor.classList.add("interactive");
    }
});

document.addEventListener("mouseout", () => {
    cursor.classList.remove("interactive");
});



// CARRUSEL ///////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrusel-track');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;

    // Determinamos el slideWidth dependiendo de la página
    const slideWidth = slides[0].offsetWidth;

    function updateCarrusel() {
        const offset = -currentIndex * slideWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarrusel();
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarrusel();
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

    // Si las imágenes cambian de tamaño dinámicamente o si la ventana cambia de tamaño, recalculamos el slideWidth
    window.addEventListener('resize', () => {
        if (document.body.classList.contains('pagina-877px')) {
            slideWidth = 877;
        } else if (document.body.classList.contains('pagina-964px')) {
            slideWidth = 964;
        } else {
            slideWidth = slides[0].offsetWidth;
        }
        updateCarrusel();
    });
});



// Mostrar la flecha cuando el usuario haga scroll hacia abajo
window.onscroll = function () {
    const scrollButton = document.getElementById("scrollToTop");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
};

// Hacer que la flecha lleve al principio cuando se hace clic
document.getElementById("scrollToTop").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/**************************************************************************************
 * *******************   ANIMACION CSS (GALERIA VISUALES)  ******************************************************* */
document.addEventListener('DOMContentLoaded', () => {
    const circleTrigger = document.querySelector('#circle');
    const svgElement = document.querySelector('svg');

    if (circleTrigger && svgElement) {
        circleTrigger.addEventListener('click', () => {
            svgElement.classList.toggle('active');
        });
    }
});

/**************************************************************************************
 * ******************   CARGAR IMÁGENES  ******************************************************* */
document.querySelectorAll('img').forEach(img => {
    img.loading = 'lazy';
});



/**************************************************************************************
 * *****************   NO PERMITIR DESCARGAR VÍDEOS ******************************************************* */

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        // Añadir controles si no los tiene
        video.setAttribute("controls", "");

        // Desactivar la descarga
        video.setAttribute("controlsList", "nodownload");

        // Desactivar clic derecho
        video.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
    });
});

window.onload = function () {
    // Verificar si hay un hash en la URL
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            // Hacer scroll hacia el elemento con el hash
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

/**************************************************************************************
 * *****************   SALTAR DE LINEA PARA TEXTOS ******************************************************* */
function unirUltimasPalabras(texto, cantidad = 3) {
  return texto.replace(
    new RegExp(`(\\S+(?:\\s+\\S+){${cantidad - 1}})(\\s+)(\\S+)\\s*$`),
    (match, grupo1, espacio, grupoFinal) => {
      const todas = (grupo1 + ' ' + grupoFinal).split(/\s+/);
      return '&nbsp;' + todas.join('&nbsp;');
    }
  );
}

function procesarParrafo(parrafo, minPalabras = 3) {
  return unirUltimasPalabras(parrafo, minPalabras);
}

function aplicarMargenAutomatico(bloque) {
  // Si el bloque tiene <br><br>, agregamos un estilo con margin
  return `<div class="salto-parrafo" style="margin-bottom: 0.75rem;">${bloque}</div>`;
}

function evitarSaltosFeos(clase = 'saltoSilaba', minPalabras = 3) {
  const elementos = document.querySelectorAll(`.${clase}`);

  elementos.forEach(el => {
    const contenidoOriginal = el.innerHTML;

    // Dividir el contenido por <br><br> (dobles saltos)
    const bloques = contenidoOriginal.split(/(?:<br\s*\/?>\s*){2,}/i);

    const bloquesProcesados = bloques.map(bloque => {
      const bloqueProcesado = procesarParrafo(bloque, minPalabras);
      return aplicarMargenAutomatico(bloqueProcesado);
    });

    el.innerHTML = bloquesProcesados.join('');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  evitarSaltosFeos('saltoSilaba', 3);
});
