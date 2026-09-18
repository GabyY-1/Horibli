const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const notifButton = document.getElementById("notifButton");
const notifMenu = document.getElementById("notifMenu");

notifButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const active = notifMenu.classList.toggle("active");
    notifButton.setAttribute("aria-expanded", active);
});

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("active");
    }

    if (!notifMenu.contains(event.target) && !notifButton.contains(event.target)) {
        notifMenu.classList.remove("active");
        notifButton.setAttribute("aria-expanded", "false");
    }
});

const elements = document.querySelectorAll(".presentation");

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
