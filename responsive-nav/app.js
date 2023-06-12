const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
    burger.classList.toggle('toggle')
})