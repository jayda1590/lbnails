const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Toggle 'active' class on the clicked link
        if (!this.classList.contains('active')) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');
        }
    });
});