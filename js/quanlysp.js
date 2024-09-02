
//Id của user đang được Edit
var IdUserIsBeingEditing = 0;
var IdImageChoose = 0;
var ListImage = [
    'images/IMG_2989-01.jpeg',
    'images/IMG_3000-01.jpeg',
    'images/IMG_3017-01.jpeg',
    'images/IMG_3046-01.jpeg',
    'images/IMG_3115-01.jpeg',
    'images/IMG_3155-01.jpeg',
]

const DeleteUser = (id) => {
    let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

    listProducts.splice(id,1);
  // localStorage.removeItem(email)
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
  ShowListProduct();
}

const EditUser = (id) => {
    let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
    let item = listProducts[id];
//   let user = ListUser[id];
//   let usernameEdit  = document.getElementById("usernameedit");
//   let emailEdit = document.getElementById("emailedit");
//   let phoneEdit = document.getElementById("phoneedit");
    let name = document.getElementById("name");
    let bestSeller = document.getElementById("bestSeller");
    let newProduct = document.getElementById("newProduct");
    let price = document.getElementById("price");

    // console.log(bestSeller.checked);

    name.value = item.name;
    bestSeller.checked = item.bestSeller;
    newProduct.checked = item.newProduct;
    price.value = item.price;
//   usernameEdit.value = user.fullname;
//   emailEdit.value = user.username;
//   phoneEdit.value = user.phone;

  IdUserIsBeingEditing = id;

  let idImage = ListImage.findIndex((i,index) => {
    return item.image == i;
  })
  //Hiển thị modal lên
  IdImageChoose = idImage;
  ShowListImgEdit();
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

//đống hộp modal
const CancelEditBtn = () => {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

const SaveEditBtn = () => {
    let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

    let name = document.getElementById("name").value;
    let bestSeller = document.getElementById("bestSeller").checked;
    let newProduct = document.getElementById("newProduct").checked;
    let price = document.getElementById("price").value;

    listProducts[IdUserIsBeingEditing].name = name;
    listProducts[IdUserIsBeingEditing].bestSeller = bestSeller;
    listProducts[IdUserIsBeingEditing].newProduct = newProduct;
    listProducts[IdUserIsBeingEditing].price = price;
    listProducts[IdUserIsBeingEditing].image = ListImage[IdImageChoose];


  localStorage.setItem("listProducts", JSON.stringify(listProducts));

  //Hiển thị modal lên
  let modal = document.getElementById("modal");
  modal.style.display = "none";

  ShowListProduct();
  return false;
}

const ShowModalCreateUser = () => {
ShowListImg();
  let modal = document.getElementById("modal-create");
  modal.style.display = "block";
}
const CloseModalCreateUser = () => {
  let modal = document.getElementById("modal-create");
  modal.style.display = "none";
}

const ChooseImage = (id) => {
  IdImageChoose = id;
  ShowListImg();
  ShowListImgEdit();
}

const ShowListImg = () => {
  let ListImageContent = document.getElementById("choose-img");
  ListImageContent.innerHTML = '';
  ListImage.map((item,index) => {
      let node = document.createElement("div");
      node.classList.add('col-2');
      node.innerHTML = `
            <div onclick="ChooseImage(${index})" style="position: relative; cursor: pointer;">
                <img src="${item}" width="40px"/>
                ${IdImageChoose == index ? 
                    `
                    <div style="position: absolute; bottom: 5px; right: 5px; z-index: 200; font-size: 30px; color: yellow;">
                        <i class="fas fa-check-circle"></i>
                 </div>`
                    :
                    ``
                }
                
         </div>
      
      `
      ListImageContent.appendChild(node);
  })

}

const ShowListImgEdit = () => {
    let ListImageContent = document.getElementById("choose-img-edit");
    ListImageContent.innerHTML = '';
    ListImage.map((item,index) => {
        let node = document.createElement("div");
        node.classList.add('col-2');
        node.innerHTML = `
              <div onclick="ChooseImage(${index})" style="position: relative; cursor: pointer;">
                  <img src="${item}" width="40px"/>
                  ${IdImageChoose == index ? 
                      `
                      <div style="position: absolute; bottom: 5px; right: 5px; z-index: 200; font-size: 30px; color: yellow;">
                          <i class="fas fa-check-circle"></i>
                   </div>`
                      :
                      ``
                  }
                  
           </div>
        
        `
        ListImageContent.appendChild(node);
    })
  
  }

const CreateNewUser = () => {
    let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];
    let image = ListImage[IdImageChoose];
//   let user = ListUser[id];
//   let usernameEdit  = document.getElementById("usernameedit");
//   let emailEdit = document.getElementById("emailedit");
//   let phoneEdit = document.getElementById("phoneedit");
    let name = document.getElementById("namenew").value;
    let bestSeller = document.getElementById("bestSellernew").checked;
    let newProduct = document.getElementById("newProductnew").checked;
    let price = document.getElementById("pricenew").value;

    // console.log(listProducts.length);

  let newItem = {
    id: listProducts[listProducts.length-1].id+1,
    name,
    price,
    quantity: 1,
    image,
    nature: {
      color: ["grey"],
      size: ["S", "M", "L"],
      type: "Gile",
    },
    newProduct,
    bestSeller
  };

  console.log(newItem);
  listProducts.push(newItem);
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
  CloseModalCreateUser();
  ShowListProduct();
  return false;
}

const ShowListProduct = () => {
    let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

    let content = document.getElementById("listuser-content");
    content.innerHTML = "";
    listProducts.map((item, index) => {
      let node = document.createElement("div");
      node.classList.add("cart-item", "row");
      node.innerHTML = `
      <div class="col-1 d-flex align-items-center justify-content-center mt-5 mb-5">${index + 1}</div>
      <div class="col-3 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px ">
        <img src="${item.image}" width="100px"/>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.name}</div>
      <div class="col-1 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5">
        ${(item.newProduct) ? "Yes" : "No"}
      </div>
      <div class="col-1 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5">
        ${(item.bestSeller) ? "Yes" : "No"}
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5">
        ${(item.price)} VND
      </div>
      <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5">
      <button onclick="EditUser(${index})" class="btn btn-primary" onclick="DeleteButton(${index})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-danger ml-2" onclick="DeleteUser(${index})"><i class="fas fa-trash"></i></button>
      </div>
      `
      content.appendChild(node);
    })

}

onload = ShowListProduct();

//Update trang khi LocalStorage thay đổi
window.addEventListener('storage', () => {
  ShowListUser();
});



