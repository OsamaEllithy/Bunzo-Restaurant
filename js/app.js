document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navLinks.forEach(l => l.classList.remove('active'));
            
            this.classList.add('active');
        });
    });
});

    // Hamburger menu functionality
    document.getElementById('hamburger').addEventListener('click', function() {
        const nav = document.getElementById('main-nav');
        nav.classList.toggle('show');
        this.classList.toggle('active');
    });