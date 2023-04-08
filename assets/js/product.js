const getProductsOne = async () => {
  try {
    const results = await fetch("./data/product.json");
    const data = await results.json();
    const productsone = data.productsone;
    return productsone;
  } catch (err) {
    console.log(err);
  }
};

const ProductsWrapperOne = document.getElementById("products-wrapper");

window.addEventListener("DOMContentLoaded", async function () {
  const productsOne = await getProductsOne();
  displayProductItem(productsOne);
});

// 
const displayProductItem = (items) => {
  let displayProduct = items.map(
    (product) => ` 
                <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src=${product.url} alt="">
              </a>
            </div>
            <div class="hoverable">
              <ul>
                <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
              </ul>
            </div>
            <div class="discount circle flexcenter"><span>${product.sale}</span></div>
          </div>
          <div class="content">
            <h3 class="main-links"><a href="#">${product.title}</a></h3>
      
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(2,548)</span>
            </div>
            <div class="price">
              <span class="current">${product.price}</span>
              <span class="normal mini-text">byr${product.oldprice}</span>
            </div>
            <div class="mini-text">
              <p>2975 sold</p>
              <p>Шоппинг легко</p>
            </div>
          </div>
        </div>
                  `
  );

  displayProduct = displayProduct.join("");
  if (ProductsWrapperOne) {
    ProductsWrapperOne.innerHTML = displayProduct;
  }
};



