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

function scrollBehavior(event) {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = Array.from(sections).findIndex(section => section.getBoundingClientRect().top === 0);
    
    if (event.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex < sections.length - 1) {
            sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    } else {
        // Scroll up
        if (currentSectionIndex > 0) {
            sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    event.preventDefault(); // Prevent the default scroll behavior
}

document.addEventListener("wheel", scrollBehavior, { passive: false });

// Add scroll-snap-points-y property to sections
const sections = document.getElementById("body").querySelectorAll("section");
sections.forEach(section => {
    section.style.scrollSnapPointsY = "repeat(850px)";
});



