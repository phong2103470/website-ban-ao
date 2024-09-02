// Lấy danh sách sản phẩm từ localStorage
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var totalPrice = 0;
var totalQuantity = 0;

const DeleteButton  = (index) => {
  console.log(index);
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.splice(index, 1);
  console.log(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  ShowCart();

}

const ThanhToanBTn = () => {
  let LoginData = JSON.parse(localStorage.getItem("LoginData"));
  if(LoginData){
    
    ShowModalInfo();
  } else{
    window.location.href = "./dangnhap.html";
  }
}

const DatHangBtn = () => {
  let LoginData = JSON.parse(localStorage.getItem("LoginData"));
  let ListBill = JSON.parse(localStorage.getItem("ListBill")) || [];
  let address = document.getElementById("address").value;
  let newBill = {
    fullname: LoginData.fullname,
    email: LoginData.username,
    phone: LoginData.phone,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
    address,
    status: 'pending'
  }

  ListBill.push(newBill);
  localStorage.setItem("ListBill", JSON.stringify(ListBill));

  console.log(newBill);
  CloseModalInfo()
  alert("Đặt hàng thành công!")
  return false;
}

const ShowCart = () => {
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  var cardlist = document.getElementById("cardlist");
  cardlist.innerHTML = "";
   totalPrice = 0;
   totalQuantity = 0;
  cartItems.map(function(item, index) {
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item", "row");
    // var pricestring = item.price.slice(0,-3);
    // var priceNumber = parseInt(pricestring) * 1000;
    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;
  //   console.log(priceNumber);
    cartItem.innerHTML = `
      <div class="col-2 d-flex align-items-center justify-content-center mt-5 mb-5"><img src="${item.image}" alt="${item.name}" width="100"></div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px ">${item.name}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.price}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.quantity}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5"  style="font-size:21px; color : red;">${item.price+"vnđ"}</div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5"><button class="btn btn-danger" onclick="DeleteButton(${index})">
      <i class="fas fa-trash"></i>
      </button></div>
    `;
    cardlist.appendChild(cartItem);
  });
  ShowResult(totalPrice, totalQuantity)
}

const ShowResult = (totalPrice, totalQuantity) => {
  let result = document.getElementById("result");
  result.innerHTML = `
  <p><b>Tổng tiền:</b> ${totalPrice}</p>
  <p><b>Số lượng áo:</b> ${totalQuantity}</p>
  <button onclick="ThanhToanBTn()" class="btn btn-primary">Thanh toán</button>
  `
}

const ShowModalInfo = () => {
  let LoginData = JSON.parse(localStorage.getItem("LoginData"));

  let fullname = document.getElementById("fullnamebill");
  let email = document.getElementById("emailbill");
  let phone = document.getElementById("phonebill");
  let  totalPriceContent = document.getElementById("totalPrice");
  let totalQuantityContent = document.getElementById("totalQuantity");

  fullname.innerHTML = `${LoginData.fullname}`;
  email.innerHTML = `${LoginData.username}`;
  phone.innerHTML = `${LoginData.phone}`;
  totalPriceContent.innerHTML = `${totalPrice} VND`;
  totalQuantityContent.innerHTML = `${totalQuantity}`;


  let modal = document.getElementById("modal-bill");
  modal.style.display = "block";
}

const CloseModalInfo = () => {
  let modal = document.getElementById("modal-bill");
  modal.style.display = "none"; 
}

window.onload = ShowCart();