const swup = new Swup();

function init() {
    if (document.querySelector(".burguerMenu")) {
        const burguer = document.querySelector(".burguerMenu");
        const list = document.querySelector(".list");
        const perfilIcon = document.querySelector(".perfilIcon");
        const perfil = document.querySelector(".perfil");
        burguer.addEventListener('click', () => {
            list.classList.toggle("active");
        })

        list.addEventListener('click', () => {
            list.classList.toggle("active");
        })

        perfilIcon.addEventListener('click', () => {
            perfil.classList.toggle("activePerfil");
        })
    };

}
swup.on('contentReplaced', init);

const burguer = document.querySelector(".burguerMenu");
const list = document.querySelector(".list");
const perfilIcon = document.querySelector(".perfilIcon");
const perfil = document.querySelector(".perfil");

burguer.addEventListener('click', () => {
    list.classList.toggle("active");
})

list.addEventListener('click', () => {
    list.classList.toggle("active");
})

perfilIcon.addEventListener('click', () => {
    perfil.classList.toggle("activePerfil");
})