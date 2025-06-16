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
    const carruseles = document.querySelectorAll('.carrusel-wrapper');

    carruseles.forEach(wrapper => {
        const track = wrapper.querySelector('.carrusel-track');
        const prevButton = wrapper.querySelector('.prev');
        const nextButton = wrapper.querySelector('.next');
        const slides = wrapper.querySelectorAll('.slide');

        let currentIndex = 0;
        let slideWidth = slides[0]?.offsetWidth || 0;

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

        prevButton?.addEventListener('click', goToPrevSlide);
        nextButton?.addEventListener('click', goToNextSlide);

        window.addEventListener('resize', () => {
            slideWidth = slides[0]?.offsetWidth || 0;
            updateCarrusel();
        });
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
function reemplazarDoblesBRenDOM(elementoRaiz) {
    const hijos = Array.from(elementoRaiz.childNodes);
    for (let i = 0; i < hijos.length - 1; i++) {
        const nodoActual = hijos[i];
        const siguienteNodo = hijos[i + 1];

        if (
            nodoActual.nodeName === 'BR' &&
            siguienteNodo.nodeName === 'BR'
        ) {
            const div = document.createElement('div');
            div.className = 'salto-parrafo';
            div.style.marginBottom = '0.75rem';

            elementoRaiz.replaceChild(div, siguienteNodo);
            elementoRaiz.replaceChild(document.createTextNode(''), nodoActual);
            i++;
        }
    }
}

function agregarSaltoLineaVisual(nodo, clasesAExcluir = []) {
    if (nodo.nodeType === Node.ELEMENT_NODE) {
        // Si el nodo tiene alguna clase a excluir, no procesar ni sus hijos
        for (const clase of clasesAExcluir) {
            if (nodo.classList.contains(clase)) return;
        }
    }

    if (nodo.nodeType === Node.TEXT_NODE) {
        const texto = nodo.textContent;
        const parent = nodo.parentNode;

        // Creamos un Range para medir posiciones
        const range = document.createRange();

        let offset = 0;
        const posicionesPuntos = [];

        // Buscar puntos para analizar
        while (true) {
            const index = texto.indexOf('.', offset);
            if (index === -1) break;
            posicionesPuntos.push(index);
            offset = index + 1;
        }

        if (posicionesPuntos.length === 0) return;

        let nuevoHTML = '';
        let ultimoIndex = 0;

        posicionesPuntos.forEach(pos => {
            // Medimos posición del punto
            range.setStart(nodo, pos);
            range.setEnd(nodo, pos + 1);
            const rectPunto = range.getBoundingClientRect();

            // Medimos posición del contenedor para calcular espacio restante en la línea
            const rectTexto = nodo.parentNode.getBoundingClientRect();

            const espacioRestante = rectTexto.right - rectPunto.right;

            // Ajusta según tamaño de fuente, ejemplo 8px por carácter x 8 chars = 64px
            const ancho8chars = 8 * 8;

            if (espacioRestante < ancho8chars) {
                nuevoHTML += texto.slice(ultimoIndex, pos + 1) + '<br>';
                ultimoIndex = pos + 1;
            }
        });

        nuevoHTML += texto.slice(ultimoIndex);

        if (nuevoHTML !== texto) {
            const span = document.createElement('span');
            span.innerHTML = nuevoHTML;
            parent.replaceChild(span, nodo);

            reemplazarDoblesBRenDOM(span.parentNode);
        }
    } else {
        nodo.childNodes.forEach(child => agregarSaltoLineaVisual(child, clasesAExcluir));
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const clasesAExcluir = ['container_footer', 'modal_windows'];
    agregarSaltoLineaVisual(document.body, clasesAExcluir);
});



/**************************************************************************************
 * *****************   resize imagenes a 72ppp**************
 * ******************************************************* *******************************************************/
function resizeImage(imgElement, maxWidth, maxHeight, quality = 0.7) {
    const canvas = document.createElement('canvas');
    let width = imgElement.naturalWidth;
    let height = imgElement.naturalHeight;

    if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
    }
    if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgElement, 0, 0, width, height);

    return canvas.toDataURL('image/jpeg', quality); // devuelve imagen comprimida en base64
}

