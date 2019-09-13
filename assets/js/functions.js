function addMenu(){
    document.getElementById("menu").classList.remove('header__lista');
    document.getElementById("menu").classList.add('header__lista-Mobile');
    document.getElementById("menu").classList.remove('header__menuD');
    document.getElementById("menu").classList.add('header__menuD-ativar');
}

document.querySelector("#btn-menu").addEventListener("click", (event) =>{
    event.preventDefault();

    addMenu();
});