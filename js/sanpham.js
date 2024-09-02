
const ShowProduct = () => {
let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let productContent = document.getElementById("product-content");
  if (productContent) {
    productContent.innerHTML = "";
    listProducts.map((item, index) => {
      if (true) {
        let node = document.createElement("div");
        node.classList.add("col-md-3", "CardItem");
        node.innerHTML = `
                                 <div class="card p-3">
                                 <div class="text-center">
          
                                 <img src="${
                                   item.image
                                 }" class="ImgItem" width="200">
          
                             </div>
          
                             <div class="product-details">
          
          
                                 <span class="font-weight-bold d-block PriceItem">${
                                   item.price
                                 }vnd</span>
                                 <span class="NameItem">${item.name}</span>
          
          
                                 <div class="buttons d-flex flex-row addToCart">
                                     <div class="cart"><i class="fa fa-shopping-cart"></i></div> 
                                     <button
                                        onclick="AddFuncButton(${item.id})"
                                         ${
                                           checkExitsItem(item.id) != -1
                                             ? `class="btn btn-primary cart-button btn-block"><span class="dot">1</span>Đã có trong giỏ hàng (${
                                                 cartItems[
                                                   checkExitsItem(item.id)
                                                 ].quantity
                                               })</button>`
                                             : `class="btn btn-success cart-button btn-block"><span class="dot">1</span>Thêm vào
                                            giỏ hàng</button>`
                                         }
                                 </div>
          
                                 <div class="weight">
          
                                     <small>S M L</small>
          
                                 </div>
          
                             </div>
                             </div>
          `;
        productContent.appendChild(node);
      }
      // AddFuncButton();
    });
  }
}


onload = ShowProduct();

window.addEventListener('storage', () => {
 ShowProduct()
});