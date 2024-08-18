

function hamburgerMenu() {
    var menuBtn = document.getElementById("nav-menu");

    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}
