document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        
        document.querySelectorAll('.content').forEach(content => {
            if (content !== this.nextElementSibling) {
                content.style.display = "none";
            }
        });

       
        this.classList.toggle('active');

        
        const content = this.nextElementSibling;

        
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
