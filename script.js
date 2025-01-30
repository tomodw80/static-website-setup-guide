document.addEventListener("DOMContentLoaded", function () {
    // Section reveal functionality
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

    // Scroll-to-top button functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        console.log("Scroll-to-top button found");

        // Show/hide FAB when scrolling
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = "block";
                scrollTopBtn.classList.add("bounce"); // Add bounce effect
            } else {
                scrollTopBtn.style.display = "none";
                scrollTopBtn.classList.remove("bounce");
            }
        });

        // Scroll back to top when FAB is clicked
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    } else {
        console.error("Scroll-to-top button not found");
    }

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (darkModeToggle) {
        console.log("Dark mode toggle button found");

        // Check if user has a saved preference
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀️"; // Sun icon for light mode
        }

        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
                darkModeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("dark-mode", "disabled");
                darkModeToggle.textContent = "🌙";
            }
        });
    } else {
        console.error("Dark mode toggle button not found");
    }

    // Utility function for querying elements
    function queryElements(t, e) {
        // Check if `e` is a valid selector
        if (typeof e !== "string" || e.trim() === "") {
            console.error("Invalid selector:", e);
            return [];
        }

        // Check if `t` is a valid element
        if (!t || !(t instanceof Element)) {
            console.error("Invalid element:", t);
            return [];
        }

        // Handle "text/" or "pierce/" cases
        if (e.startsWith("text/") || e.startsWith("pierce/")) {
            return [];
        }

        // Query shadow DOM if it exists
        if (t.shadowRoot) {
            try {
                return Array.from(t.shadowRoot.querySelectorAll(e));
            } catch (error) {
                console.error("Error querying shadow DOM:", error);
                return [];
            }
        }

        // Query regular DOM
        try {
            return Array.from(t.querySelectorAll(e));
        } catch (error) {
            console.error("Error querying DOM:", error);
            return [];
        }
    }
});
