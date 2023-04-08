const getProductsTwo = async () => {
  try {
    const results = await fetch("./data/product-two.json");
    const data = await results.json();
    const products = data.productstwo;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrapperTwo = document.getElementById("products-wrapper-two");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProductsTwo();
  displayProductItems(products);
});

// 
const displayProductItems = (items) => {
  let displayProduct = items.map(
    (produ) => ` 
                <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src=${produ.url} alt="">
              </a>
            </div>
            <div class="hoverable">
              <ul>
                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
              </ul>
            </div>
            <div class="discount circle flexcenter"><span>${produ.sale}</span></div>
          </div>
          <div class="content">
            <h3 class="main-links"><a href="#">${produ.title}</a></h3>
      
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(2,548)</span>
            </div>
            <div class="price">
              <span class="current">${produ.price}</span>
              <span class="normal mini-text">byr${produ.oldprice}</span>
            </div>
            <div class="mini-text">
              <p>2975 sold</p>
              <p>Свободная покупка</p>
            </div>
          </div>
        </div>
                  `
  );

  displayProduct = displayProduct.join("");
  if (ProductsWrapperTwo) {
    ProductsWrapperTwo.innerHTML = displayProduct;
  }
};



