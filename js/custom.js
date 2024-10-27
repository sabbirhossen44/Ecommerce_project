const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', ()=>{
    if (menu.classList== 'menuBar') {
        menu.classList.remove('menuBar');
    }else{
        menu.classList.add('menuBar');
    }
})