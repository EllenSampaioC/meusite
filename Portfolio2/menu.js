
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFechar = document.getElementById('btn-fechar')

// Abre o menu mobile
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
    overlay.classList.add('abrir-menu')
})

// Fecha o menu mobile quando o botão de fechar for clicado
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
    overlay.classList.remove('abrir-menu')
})

// Fecha o menu quando a sobreposição for clicada
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
    overlay.classList.remove('abrir-menu')
})
