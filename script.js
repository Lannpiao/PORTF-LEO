const btnMobile = document.getElementById('btn_menu');

function toggleMenu(){
    const nav = document.getElementById('menu');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);