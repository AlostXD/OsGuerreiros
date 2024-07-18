const abrirNav = document.getElementById('btn-navbar-abrir')
const fecharNav = document.getElementById('btn-navbar-fechar')
const navbar = document.getElementById('navbar-content')
const backdrop = document.getElementById('backdrop')

function abrir() {
    navbar.style.display = 'flex';
    backdrop.style.display = 'block';
    abrirNav.style.display = 'none';
}

function fechar() {
    navbar.style.display = 'none';
    backdrop.style.display = 'none';
    abrirNav.style.display = 'flex';
}


function abrirModal(modalID) {
    let modal = document.getElementById(modalID);
    if(modal){
        modal.showModal();
    } else {
        console.log('Modal não encontrado');
    }
}

function fecharModal(modalID) {
    let modal = document.getElementById(modalID);
    if(modal){
        modal.close();
    } else {
        console.log('Modal não encontrado');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-box-questions li');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-text');
        if (question) {
            question.addEventListener('click', function() {
                const answer = item.querySelector('.faq-response');
                if (answer) {
                    answer.classList.toggle('show');
                }
            });
        }
    });
});

let isScrolling = false;

function smoothScrollTo(element, duration) {
    const start = window.pageYOffset;
    const target = element.getBoundingClientRect().top + window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();

    function scroll() {
        const currentTime = performance.now();
        const elapsedTime = (currentTime - startTime) / duration;
        const progress = Math.min(elapsedTime, 1);
        const easeInOut = 0.5 - Math.cos(progress * Math.PI) / 2;
        window.scrollTo(0, start + distance * easeInOut);

        if (progress < 1) {
            requestAnimationFrame(scroll);
        } else {
            isScrolling = false; // Reset flag when scroll is complete
        }
    }

    requestAnimationFrame(scroll);
}

function scrollBehavior(event) {
    if (isScrolling) return; // Prevent scrolling if already in progress

    isScrolling = true; // Set flag to indicate scrolling is in progress
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
    });

    if (event.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex >= 0 && currentSectionIndex < sections.length - 1) {
            smoothScrollTo(sections[currentSectionIndex + 1], 1000); // 1000 ms for slow scrolling
        }
    } else {
        // Scroll up
        if (currentSectionIndex > 0) {
            smoothScrollTo(sections[currentSectionIndex - 1], 1000); // 1000 ms for slow scrolling
        }
    }

    event.preventDefault(); // Prevent the default scroll behavior
}

document.addEventListener("wheel", scrollBehavior, { passive: false });