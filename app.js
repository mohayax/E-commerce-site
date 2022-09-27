const navlinks = document.getElementById("nav-links");
const toggleBtn = document.getElementById("bar");
const closeBtn = document.getElementById("close");

toggleBtn.addEventListener("click", function () {
    navlinks.classList.toggle("show-links");
});
closeBtn.addEventListener("click", function () {
    navlinks.classList.toggle("show-links");
});

// sinlge product image selector

const mainIMg = document.getElementById('main-img');
const sampleImg = document.querySelectorAll('.sample-img');
const imgG = document.querySelector('.img-group');
const imgC = document.querySelectorAll('.imgClass');

sampleImg.forEach((image, i) => image.addEventListener('click', function () {
    mainIMg.src = imgC[i].src;
    
}))

// click on shop page product to open single product page

const product = document.querySelectorAll('.pro');

product.forEach((pro) => pro.addEventListener('click', () => window.location.href="single.html"));