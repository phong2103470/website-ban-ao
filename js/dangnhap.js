const LoginButton = () => {

  let ListUser = JSON.parse(localStorage.getItem("ListUser")) || [];


  var TBElement = document.querySelector('#thongbao');
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(password);

  let userFind = ListUser.find((item,index) => {
    return email == item.username
  })
  console.log(userFind);
  if(userFind){
    if(userFind.password == password){
      TBElement.innerHTML  = 'Đăng nhập thành công!';
      localStorage.setItem("LoginData", JSON.stringify(userFind));
      window.location.href = "indexx.html";
    }
    else {
      TBElement.innerHTML  = 'Email hoặc mật khẩu không chính xác!';
      return false;
    }
  }else{
    TBElement.innerHTML  = 'Email hoặc mật khẩu không chính xác!';
    return false;
  }
  return false;
}


// validation form login
// const inputEmail = document.querySelector("#E-mail");
// const inputPassword = document.querySelector("#mk1");
// const btnLogin = document.querySelector("#loginbutton");
// var TBElement = document.querySelector('#thongbao');

// // validation form login

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (inputEmail.value === "" || inputPassword.value === "") {
//     TBElement.innerHTML  = 'Hãy nhập Email và mật khẩu!';
//     return false;
//   } else {
//     const user = JSON.parse(localStorage.getItem(inputEmail.value));
//     if (
//       user.username === inputEmail.value &&
//       user.password === inputPassword.value
//     ) {
//       TBElement.innerHTML  = 'Đăng nhập thành công!';
//       window.location.href = "indexx.html";
//     }else {
//       TBElement.innerHTML  = 'Email hoặc mật khẩu không chính xác!';
//       return false;
//     }
//   }
//   return true;
// });