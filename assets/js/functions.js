const menu = document.querySelector('.menu')

let menuAberto = false

function mostrarMenu() {
    if(menuAberto) {
        menu.style.height = '60px'
        menuAberto = false
    } else {
        menu.style.height = '350px'
        menuAberto = true
    }
}

window.addEventListener('resize', () => {
    if(window.innerWidth > 768)
        menu.style = ''
})