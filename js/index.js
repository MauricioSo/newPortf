const swup = new Swup(); 

function init() { 
    if(document.querySelector(".burguer")) { 
const burguer = document.querySelector(".burguer");
const list = document.querySelector(".list"); 


burguer.addEventListener('click', () => {
    list.classList.toggle("menu-active");
    })

list.addEventListener('click', () => {
    list.classList.toggle("menu-active");
})

};
}
swup.on('contentReplaced', init); 

const burguer = document.querySelector(".burguer");
const list = document.querySelector(".list"); 


burguer.addEventListener('click', () => {
    list.classList.toggle("menu-active");
    })

list.addEventListener('click', () => {
    list.classList.toggle("menu-active");
})