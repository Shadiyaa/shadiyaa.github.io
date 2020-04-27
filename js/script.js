(() => {
    const button = document.querySelector(".navigation-btn");
    const menu = document.querySelector(".navigation-list");

    const toggleClass = () => {
        menu.classList.toggle("nav-open");
    }

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();