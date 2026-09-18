const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const notifButton = document.getElementById("notifButton");
const notifMenu = document.getElementById("notifMenu");

if (notifButton && notifMenu) {
    notifButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const active = notifMenu.classList.toggle("active");
        notifButton.setAttribute("aria-expanded", active);
    });
}

if (menuButton && menu) {
    menuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        menu.classList.toggle("active");
    });
}

document.addEventListener("click", (event) => {
    if (menu && menuButton && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("active");
    }

    if (notifMenu && notifButton && !notifMenu.contains(event.target) && !notifButton.contains(event.target)) {
        notifMenu.classList.remove("active");
        notifButton.setAttribute("aria-expanded", "false");
    }
});

const elements = document.querySelectorAll(".presentation");

if (elements.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
}