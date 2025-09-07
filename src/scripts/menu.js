const tabs = document.querySelectorAll("#menuTabs .nav-link");
const lists = document.querySelectorAll(".shows__list__tabcontent");

tabs.forEach(tab => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    // remove active das abas
    tabs.forEach(t => t.classList.remove("active"));

    // esconde todas as listas
    lists.forEach(list => {
      list.classList.add("d-none");
      list.classList.remove("shows__list--is-active");
    });

    // ativa a aba clicada
    this.classList.add("active");

    // mostra a lista correspondente
    const section = this.getAttribute("data-section");
    const activeList = document.getElementById(section);
    activeList.classList.remove("d-none");
    activeList.classList.add("shows__list--is-active");
  });
});





    // Seleciona o elemento do header
    const headerElement = document.querySelector('.header');

    // Adiciona um "ouvinte" que fica de olho no evento de scroll da página
    window.addEventListener('scroll', function() {
        // Pega a altura atual do scroll. Se for maior que 10px...
        if (window.scrollY > 10) {
            // Adiciona a classe 'header--scrolled' ao header
            headerElement.classList.add('header--scrolled');
        } else {
            // Se o scroll voltar para o topo, remove a classe
            headerElement.classList.remove('header--scrolled');
        }
    });
