// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form //
const searchForm = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchbox.focus();
    e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

ducument, 
    addventListener("click", function (e) {
        if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove("active");
        }

        if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
            searchForm.classList.remove("active");
        }
    });