// ================================
// SANZSTORE - MODERN JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // Navbar berubah saat halaman di-scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    // Animasi elemen ketika masuk layar
    const elements = document.querySelectorAll(
        ".card, .about-box, .title, .contact"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        element.classList.add("hidden");
        observer.observe(element);
    });


    // Efek klik tombol
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.classList.add("clicked");

            setTimeout(() => {
                button.classList.remove("clicked");
            }, 300);

        });

    });


    // Tahun footer otomatis
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // Efek mengetik pada tagline
    const tagline = document.querySelector(".tag");

    if (tagline) {

        const text = tagline.textContent.trim();

        tagline.textContent = "";

        let index = 0;

        function typingEffect() {

            if (index < text.length) {

                tagline.textContent += text.charAt(index);

                index++;

                setTimeout(typingEffect, 70);

            }

        }

        typingEffect();

    }

});
