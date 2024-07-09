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