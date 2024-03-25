// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.toggle-btn');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const slidingWindow = document.getElementById('sliding-window');

    // Toggle sliding window and menu on button click
    menuToggle.addEventListener('click', function () {
        slidingWindow.classList.toggle('active');
    });
});