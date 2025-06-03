// Inciar função com DOM
document.addEventListener('DOMContentLoaded', () => {
    header_menu()
});

function header_menu() {
    const btn = document.querySelector('header #menu_btn')
    const menu = document.querySelector('#another')

    btn.addEventListener('click', () => {
        menu.classList.toggle("hidden")
    })

}