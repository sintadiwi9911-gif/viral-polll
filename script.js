// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.onclick = () => {
    nav.classList.toggle("active");
};

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// SCROLL ANIMATION
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveal.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

// PROGRESS BAR
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};

// FORM
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Pesan terkirim 🚀");
});
