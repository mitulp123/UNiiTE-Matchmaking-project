const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', function () {
    sidebar.classList.add('open');  // Open sidebar
    menuBtn.classList.add('hidden'); // Hide menu button
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('open'); // Close sidebar
    menuBtn.classList.remove('hidden'); // Show menu button
});
