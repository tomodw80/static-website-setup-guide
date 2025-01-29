document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main > *");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger once on load
});
document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show/hide FAB when scrolling
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
            scrollTopBtn.classList.add("bounce"); // Add bounce effect
        } else {
            scrollTopBtn.style.display = "none";
            scrollTopBtn.classList.remove("bounce");
        }
    });

    // Scroll back to top when FAB is clicked
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if user has a saved preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️"; // Sun icon for light mode
    }

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.textContent = "🌙";
        }
    });
});
