
const carrousel = document.getElementById("carrousel");
const products = document.querySelectorAll(".product");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;


function showProduct() {

  for (let product of products) {
    product.style.display = "none";
  }

  products[currentIndex].style.display = "block";
}


function prevProduct() {

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = products.length - 1;
  }
  
  showProduct();
}


function nextProduct() {
  currentIndex++;
  
  if (currentIndex > products.length - 1) {
    currentIndex = 0;
  }
  
  showProduct();
}


prev.addEventListener("click", prevProduct);
next.addEventListener("click", nextProduct);


showProduct();
