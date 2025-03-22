document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll Effect
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Parallax Effect
    function parallaxScroll() {
        let elements = document.querySelectorAll("[data-parallax]");
        let windowHeight = window.innerHeight;

        elements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            if (position < windowHeight - 50) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", parallaxScroll);
});