 // ================================
// DARK MODE
// ================================

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("wasifCvTheme") === "dark") {
    document.body.classList.add("dark");
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("wasifCvTheme", currentTheme);

});


// ================================
// MOBILE NAVIGATION
// ================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


// Close mobile menu when a link is clicked

navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

    });

});


// ================================
// PRINT CV / SAVE AS PDF
// ================================

const printCvButton = document.getElementById("printCv");

printCvButton.addEventListener("click", function () {

    window.print();

});


// ================================
// AUTOMATIC COPYRIGHT YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();