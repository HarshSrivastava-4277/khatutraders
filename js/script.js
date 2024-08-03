let loginForm = document.querySelector('.login-form');
 document.querySelector('#login-btn').onclick = () =>
{
loginForm.classList.toggle('active');
}


let navbar = document.querySelector('.navbar');
 document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}