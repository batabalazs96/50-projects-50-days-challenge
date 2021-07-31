const panels = document.querySelectorAll('.panel');

for (const panel of panels) {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
    })
}

function removeActiveClass() {
    for (const panel of panels) {
        panel.classList.remove('active');
    }
}