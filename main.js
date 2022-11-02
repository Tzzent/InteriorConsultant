const lines = document.querySelector('.lines');
const _nav = document.getElementById('_nav');

lines.addEventListener('click', () => {
    _nav.classList.toggle('nav-active');
})