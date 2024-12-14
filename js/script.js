// JavaScript to add functionality like animations, smooth scroll, etc.

// Example: Smooth scrolling when clicking navigation links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
