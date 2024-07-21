let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn= document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');
let menuBtn= document.querySelector('#menu-bar');
let navList= document.querySelector('.navbar');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navList.classList.toggle('active');
});

loginBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});

searchBtn.addEventListener('click',() =>{
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
});

const swiper = new Swiper('.swiper',{
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:4500,
        disableOnInteraction: false,
    },
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        loginForm.classList.remove('active');
        // You can customize the SweetAlert2 alert as needed
        Swal.fire({
            title: 'Login Successful!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {

            // Close the login form
            document.querySelector('.login-form-container').style.display = 'none';
        });
    });
});

