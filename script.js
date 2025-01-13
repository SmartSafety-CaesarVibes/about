document.addEventListener("DOMContentLoaded", function() {
    console.log("About page loaded!");

    // Add hover effect to team boxes
    document.querySelectorAll(".team-box").forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)";
            box.style.transition = "0.3s";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
        });
    });
});
