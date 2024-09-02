//Hàm lấy dữ liệu trên url:
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};



let list = document.getElementById('list');
  let filter = document.querySelector('.filter');
  let count = document.getElementById('count');

 let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

 
  
const ShowProduct = (listProducts) => {
 // let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
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
  


const SearchButton = () => {
let searchInput = document.getElementById("search-input").value;
let category = document.getElementById("category").value;
let color = document.getElementById("color").value;
let productFilter = listProducts;
      productFilter = listProducts.filter(item => {

        if(category != ''){
          if(item.nature.type != category){
              return false;
          }
      }
      if(color != ''){
        if(!item.nature.color.includes(color)){
            return false;
        }
    }
          // check name
          if(searchInput != ''){
              if(!item.name.toLowerCase().includes(searchInput.toLowerCase())){
                console.log(item.name.toLowerCase().includes(searchInput.toLowerCase()));
                  return false;
              }
          } 
  
  
          return true;
      })
      ShowProduct(productFilter);
}



  //Hàm thực hiện lần search đầu tiên với dữ liệu url
  const searchInit = () => {
      let searchParamData = getUrlParameter("timkiem");
      let searchInput = document.getElementById("search-input").value = searchParamData;
      let productFilter = listProducts;
      productFilter = listProducts.filter(item => {
          // check name
          console.log(searchInput);
          if(searchInput != ''){
              if(!item.name.toLowerCase().includes(searchInput.toLowerCase())){
                console.log(item.name.toLowerCase().includes(searchInput.toLowerCase()));
                  return false;
              }
          } 
  
  
          return true;
      })
      ShowProduct(productFilter);
  }

  //chạy hàm khi web load
  window.onload = searchInit();