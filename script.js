document.addEventListener("DOMContentLoaded", function () {
    // === Automatic Slideshow ===
    let currentSlide = 0;
    const slides = document.querySelectorAll(".image_slideshow .slide");

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 3000);
    }

    // === Resume Download ===
    document.getElementById("resume").addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "Resume_Caramillo.docx";
        link.download = "Resume_Caramillo.docx";
        link.click();
    });

    // === Social Media Links ===
    document.getElementById("github").addEventListener("click", function () {
        window.open("https://github.com/natescaramillo");
    });

    document.getElementById("twitter").addEventListener("click", function () {
        window.open("https://x.com/NCaramillo?t=OVXY7_DWlivkF-wYalnJnw&s=07");
    });

    document.getElementById("instagram").addEventListener("click", function () {
        window.open("https://www.instagram.com/nathancrmll03/");
    });

    document.getElementById("facebook").addEventListener("click", function () {
        window.open("https://www.facebook.com/nates.caramillo03");
    });

    document.getElementById("discord").addEventListener("click", function () {
        window.open("https://discord.com/users/591840785683709972");
    });
});
