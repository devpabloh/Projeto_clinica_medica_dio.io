function toggleMenu(){
    document.getElementById("menu-toggle").classList.toggle("toggle");
    document.getElementById("nav-links").classList.toggle("active");
}

document.getElementById("menu-toggle").addEventListener("click", toggleMenu);

//adiciona um evento de clique á logo para alternar o menu
document.getElementById("logo-click").addEventListener("click", function(){
        toggleMenu(); //fecha o menu se estiver aberto
    
})