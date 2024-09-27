document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        // Close all other content sections
        document.querySelectorAll('.content').forEach(content => {
            if (content !== this.nextElementSibling) {
                content.style.display = "none"; // Hide other content
            }
        });

        // Toggle active class for the clicked button
        this.classList.toggle('active');

        // Get the associated content
        const content = this.nextElementSibling;

        // Toggle content display for the clicked button
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
