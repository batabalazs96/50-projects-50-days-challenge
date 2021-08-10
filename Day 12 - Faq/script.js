const faqs = document.querySelectorAll(".faq");
const faqToggles = document.querySelectorAll(".faq-toggle")

for (const faqToggle of faqToggles) {
    faqToggle.addEventListener('click', () => {
        faqToggle.parentNode.classList.toggle('active');
    })
}
