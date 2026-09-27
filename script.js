/* =========================================================
   BHASKAR TIWARI PORTFOLIO
   JavaScript
   ========================================================= */


/* ================= THEME TOGGLE ================= */

const themeToggle = document.getElementById("themeToggle");


// Check previously saved theme
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    if (themeToggle) {
        themeToggle.textContent = "☀";
    }

} else {

    if (themeToggle) {
        themeToggle.textContent = "☾";
    }
}


// Toggle dark/light mode
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");


        const isDark =
            document.body.classList.contains("dark-theme");


        if (isDark) {

            themeToggle.textContent = "☀";

            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "☾";

            localStorage.setItem("theme", "light");

        }

    });

}



/* ================= SMOOTH NAVIGATION ================= */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});



/* ================= CURRENT YEAR ================= */

const footerYear =
    document.querySelector(".footer p");


if (footerYear) {

    footerYear.textContent =
        "© " +
        new Date().getFullYear() +
        " Bhaskar Tiwari";

}



/* ================= IMAGE FALLBACK ================= */

const images =
    document.querySelectorAll("img");


images.forEach(function (image) {

    image.addEventListener("error", function () {

        console.log(
            "Image could not be loaded:",
            image.src
        );

    });

});



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".skill-card, " +
        ".project-card, " +
        ".achievement-card, " +
        ".certificate-card, " +
        ".education-card, " +
        ".learning-item, " +
        ".mission-box, " +
        ".contact-grid"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-element"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    element.classList.add(
        "reveal-element"
    );

    revealObserver.observe(element);

});



/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".navbar a"
    );


const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(
                        function (link) {

                            link.classList.remove(
                                "active"
                            );

                        }
                    );


                    const activeLink =
                        document.querySelector(
                            '.navbar a[href="#' +
                            entry.target.id +
                            '"]'
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            rootMargin:
                "-30% 0px -60% 0px"
        }

    );


sections.forEach(function (section) {

    sectionObserver.observe(section);

});



/* ================= CONSOLE MESSAGE ================= */

console.log(
    "Bhaskar Tiwari Portfolio loaded successfully."
);

