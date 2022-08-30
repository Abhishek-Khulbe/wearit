var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("product-img hover");

smallImg[0].onclick = function () {
    console.log(mainImg);
  mainImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
