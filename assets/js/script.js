// Mobile navigation menu open/close functionality
const navMenu = document.querySelector("#navMenu");
const openBtn = document.querySelector("#data-toggle-open");
const closeBtn = document.querySelector("#data-toggle-close");
const overlay = document.querySelector("#data-toggle-overlay");

const openMenu = () => {
    navMenu.classList.remove("-right-[100%]")
    navMenu.classList.add("right-0")
    overlay.classList.remove("hidden")
}

const closeMenu = () => {
    navMenu.classList.remove("right-0")
    navMenu.classList.add("-right-[100%]")
    overlay.classList.add("hidden")
}

openBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)
overlay.addEventListener("click", closeMenu)


// Sabhi navigation list items ko select karo jinke paas "nav-list" class hai
const lists = document.querySelectorAll("#nav-list");

const activePage = (e) => {
    lists.forEach((list) => list.classList.remove("text-white"))

    e.target.classList.add("text-white")
}

lists.forEach((list) => {
    list.addEventListener("click", activePage)
})



const scrollHeader = () => {
    const header = document.querySelector("#header")
    this.scrollY >= 50 ? header.classList.add("shadow-xl") : header.classList.remove("shadow-xl")
}

window.addEventListener("scroll", scrollHeader)


