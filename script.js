// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Section reveal on scroll
const sections = document.querySelectorAll('section');
const revealSection = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSection);
revealSection(); // Initial check
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('light-mode', savedTheme === 'light');
    themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}