
const AddFuncButton = (id) => {
  let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let newItem = listProducts[id - 1];
  let findItem = cartItems.findIndex((item, index) => {
    return newItem.id == item.id;
  });
  console.log(findItem);
  if (findItem != -1) {
    cartItems[findItem].quantity++;
  } else cartItems.push(newItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));


  // Update lại button
  let newProductContent = document.getElementById("new-product");

  if (newProductContent) {
    ShowNewProduct();
    ShowBestSellerProduct();
  }

  let productContent = document.getElementById("product-content");
  if(productContent){
    ShowProduct();
  }
};

const checkExitsItem = (id) => {
  let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let newItem = listProducts[id - 1];
  return cartItems.findIndex((item, index) => {
    return newItem.id == item.id;
  });
};
let listProductsInit = [
  {
    id: 1,
    name: "Áo Phông Xanh Blupi",
    price: 205600,
    quantity: 1,
    image: "images/IMG_2989-01.jpeg",
    nature: {
      color: ["blue"],
      size: ["S", "M", "L"],
      type: "T-shirt",
    },
    newProduct: true,
    bestSeller: false,
  },
  {
    id: 2,
    name: "Áo Phông Xanh Đen Blupi",
    price: 300000,
    quantity: 1,
    image: "images/IMG_3000-01.jpeg",
    nature: {
      color: ["blue", "black"],
      size: ["S", "M", "L"],
      type: "T-shirt",
    },
    newProduct: true,
    bestSeller: false,

  },
  {
    id: 3,
    name: "Áo Phông Đen Blupi",
    price: 200000,
    quantity: 1,
    image: "images/IMG_3017-01.jpeg",
    nature: {
      color: ["black"],
      size: ["S", "M", "L"],
      type: "T-shirt",
    },
    newProduct: true,
    bestSeller: true,
  },
  {
    id: 4,
    name: "Gile Đen Blupi",
    price: 400000,
    quantity: 1,
    image: "images/IMG_3046-01.jpeg",
    nature: {
      color: ["black"],
      size: ["S", "M", "L"],
      type: "Gile",
    },
    newProduct: true,
    bestSeller: true,
  },
  {
    id: 5,
    name: "Gile Xám Blupi",
    price: 320000,
    quantity: 1,
    image: "images/IMG_3115-01.jpeg",
    nature: {
      color: ["grey"],
      size: ["S", "M", "L"],
      type: "Gile",
    },
    newProduct: false,
    bestSeller: true,
  },
  {
    id: 6,
    name: "Gile Đỏ Blupi",
    price: 100000,
    quantity: 1,
    image: "images/IMG_3155-01.jpeg",
    nature: {
      color: ["red"],
      size: ["S", "M", "L"],
      type: "Gile",
    },
    newProduct: false,
    bestSeller: true,
  },
];

let listProductsFirst = JSON.parse(localStorage.getItem("listProducts"));
if (!listProductsFirst) {
  localStorage.setItem("listProducts", JSON.stringify(listProductsInit));
}

const ShowNewProduct = () => {
  let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
  let newProductContent = document.getElementById("new-product");
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (newProductContent) {
    newProductContent.innerHTML = "";
    listProducts.map((item, index) => {
      if (item.newProduct) {
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
        newProductContent.appendChild(node);
      }
      // AddFuncButton();
    });
  }
};

const ShowBestSellerProduct = () => {
  let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  let newProductContent = document.getElementById("best-seller");
  if (newProductContent) {
    newProductContent.innerHTML = "";
    listProducts.map((item, index) => {
      if (item.bestSeller) {
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
        newProductContent.appendChild(node);
      }
      // AddFuncButton();
    });
  }
};

const CheckLogin = () => {
  let LoginData = JSON.parse(localStorage.getItem("LoginData"));
  let loginControl = document.getElementById("login-control");
    if(LoginData && loginControl){
        loginControl.innerHTML = `
        <a onclick="OpenModalInfoUser()" class="mr-2">${LoginData.fullname}</a>
        <img id="user" style="width: 30px;" src="images/user.png">
        `
        let fullname = document.getElementById("fullname");
        let email= document.getElementById("email");
        let phone = document.getElementById("phone");

        fullname.innerHTML = `
        <b>${LoginData.fullname}</b>
        `;
        email.innerHTML = `
        <b>${LoginData.username}</b>
        `;
        phone.innerHTML = `
        <b>${LoginData.phone}</b>
        `
    }
}

const OpenModalInfoUser = () => {
  const modal = document.getElementById("modal-info");
  modal.style.display = 'block';
}

const ClostModalInfoUser = () => {
    const modal = document.getElementById("modal-info");
    modal.style.display = 'none';
}

const SignOutButton = () => {
  localStorage.removeItem("LoginData");
  location.reload();
}

onload = ShowNewProduct();
onload = ShowBestSellerProduct();
onload = CheckLogin();

window.addEventListener("storage", () => {
  ShowNewProduct();
});



window.addEventListener('storage', () => {
  ShowNewProduct();
  ShowBestSellerProduct();
});