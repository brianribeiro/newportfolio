function toggleMenu() {
    var x = document.querySelector('.pages')
    var menuButton = document.querySelector('.menu_button')
    if (x.style.display === 'flex') {
        x.style.display = 'none'
        document.querySelector('#button_status').src = './images/icons/menu.png'
        
    } else {
        x.style.display = 'flex'
        document.querySelector('#button_status').src = './images/icons/close.png'
    }
}