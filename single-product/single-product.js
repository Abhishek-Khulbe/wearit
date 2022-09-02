var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("product-img hover");

console.log(smallImg.length);
if (smallImg.length !== 0) {
  smallImg[0].onclick = function () {
    console.log(mainImg);
    mainImg.src = smallImg[0].src;
  };

  smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
  };
}

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}
