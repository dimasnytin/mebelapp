const getProductsThree = async () => {
  try{
    const results = await fetch("./data/product-three.json");
    const data = await results.json();
    const productsthree = data.productsthree;
    return productsthree;
  }catch(err){
    console.log(err);
  }
};

const ProductsWrapperThree = document.getElementById("products-wrapper-three");

window.addEventListener('DOMContentLoaded', async function () {
  let productsThree = await getProductsThree();
  displayProductItemsThree(productsThree);
});

// 
const displayProductItemsThree = (items) =>{
  let displaProduct = items.map(
    (producthree) => `
    
    <div class="item">
      <div class="media">
          <div class="thumbnail object-cover">
              <a href="#">
                  <img src=${producthree.url} alt="">
              </a>
          </div>
          <div class="hoverable">
              <ul>
                  <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
                  <li><a href="#"><i class="ri-eye-line"></i></a></li>
                  <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
              </ul>
          </div>
          <div class="discount circle flexcenter"><span>${producthree.sale}</span></div>
      </div>
      <div class="content">
          <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(1,955)</span>
          </div>
          <h3><a href="#">${producthree.title}</a></h3>
          <div class="price">
              <span class="current">${producthree.price}</span>
              <span class="normal mini-text">$75.50</span>
            </div>
      </div>
  </div>

    `
  );

  displaProduct = displaProduct.join("");
  if(ProductsWrapperThree){
    ProductsWrapperThree.innerHTML = displaProduct;
  }
};