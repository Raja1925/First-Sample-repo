const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')

hamburgerIcon.addEventListener('click', () =>{
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

const LoginPage = document.querySelector('.login');

LoginPage.addEventListener('click', () => {
    LoginPage.classList.add('close-icon-click');
})

