// script.js
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".nav__toggle");
    const navList = document.querySelector(".nav__list");
    const toggleBtnImg = toggleBtn.querySelector("img");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            if (navList.classList.contains("active")) {
                toggleBtnImg.src = "media/menu.svg";
            } else {
                toggleBtnImg.src = "media/close.svg";
            }
            navList.classList.toggle("active");

        });
    }

    // Закрытие меню при клике на ссылку (для мобильных)
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navList.classList.contains("active")) {
                toggleBtnImg.src = "media/menu.svg"
                navList.classList.remove("active");
            } 
            
        });
    });
});