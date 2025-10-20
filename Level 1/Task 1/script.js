const text = "Transforming Education, Careers & Technology";
let index = 0;
const speed = 70;
function typingEffect() {
    const el = document.querySelector(".typed-text");
    if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, speed);
    }
}
typingEffect();

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.2 }
);
reveals.forEach((el) => observer.observe(el));

document.querySelectorAll("a").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        setTimeout(() => ripple.remove(), 600);
    });
});