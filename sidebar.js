const sidebar = document.getElementById('sidebar');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
});
