document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;

        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            faqAnswer.style.display = 'block';
        } else {
            faqAnswer.style.display = 'none';
        }
    });
});
