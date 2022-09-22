const navlinks = document.getElementById("nav-links");
const toggleBtn = document.getElementById("bar");
const closeBtn = document.getElementById("close");

toggleBtn.addEventListener("click", function () {
    navlinks.classList.toggle("show-links");
});
closeBtn.addEventListener("click", function () {
    navlinks.classList.toggle("show-links");
});