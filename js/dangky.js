
// email
function isEmail(input) {
    let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(input.value))
        return true;
    return false;
}

// không rỗng

function isRequired(input) {
    if (input.value !== '')
        return true;
    return false;
}

// ho ten
function isName(input){
    if(input.value.length <= 30 )
        return true;
    return false;
}

// sđt
function isPhoneNB(input){
    if(input.value.length == 10)
        return true;
    return false;
}

// matkhau
function isPassword(input) {
    let regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regEx.test(input.value))
        return true;
    return false;
}

// mật khâu 2:
function isConfirmedPassword(input, password) {
    if (input.value === password.value)
        return true;
    return false;
}

// hàm gọi tổng
// function validate(formElement){
//     let NameElement = formElement.querySelector('#fullname');
//     let PNElement = formElement.querySelector('#Pnumber');
//     let EmailElement =  formElement.querySelector('#E-mail');
//     let PWElement = formElement.querySelector('#mk1');
//     let PWAElement = formElement.querySelector('#mk2');
//     var TBElement = formElement.querySelector('#thongbao');

//     if(!isRequired(NameElement)){
//         TBElement.innerHTML  = 'Họ tên không được bỏ trống!';
//         return false;
//     }
//     else if(!isName(NameElement)){
//         TBElement.innerHTML = 'Họ tên không vượt quá 30 ký tự!';
//         return false;
//     }
//     else if(!isRequired(PNElement)){
//         TBElement.innerHTML  = 'Số điện thoại không được bỏ trống!';
//         return false;
//     }
//     else if(!isPhoneNB(PNElement)){
//         TBElement.innerHTML = 'Số điện thoải phải đủ 10 số!';
//         return false;
//     }
//     else if(!isRequired(EmailElement)){
//         TBElement.innerHTML  = 'Email không được bỏ trống!';
//          return false;
//     }
//     else if(!isEmail(EmailElement)){
//         TBElement.innerHTML  = 'Email không hợp lệ!';
//         return false;
//     }
//     else if(!isRequired(PWElement)){
//         TBElement.innerHTML  = 'Mật Khẩu không được bỏ trống!';
//         return false;
//     }
//     else if(!isPassword(PWElement)){
//         TBElement.innerHTML  = 'Mật khẩu phải có ít nhất 1 chữ cái in Hoa và ít nhất một chữ số!';
//         return false;
//     }
//     else if(!isConfirmedPassword(PWAElement, PWElement)){
//         TBElement.innerHTML  = 'Mật khẩu không trùng khớp!';
//         return false;
//     }
// }

// function signup(e){
//     event.preventDefault();
//     var hoten = document.getElementById("fullname").value;
//     var sdt = document.getElementById("Pnumber").value;
//     var email = document.getElementById("E-mail").value;
//     var pass = document.getElementById("mk1").value;

//     var user ={
//         hoten : hoten,
//         sdt : sdt,
//         email : email,
//         pass : pass,
//     };

//     var json = JSON.stringify(user);
//     localStorage.setItem(email,json);
//     alert("dang ki thanh cong");
// }

// validation form register and register user local storage
const inputEmailRegister = document.querySelector("#E-mail");
const inputPasswordRegister = document.querySelector("#mk1");
const btnRegister = document.querySelector("#signupbutton");
let NameElement = document.querySelector('#fullname');
let PNElement = document.querySelector('#Pnumber');
let PWAElement = document.querySelector('#mk2');
var TBElement = document.querySelector('#thongbao');

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
    if(!isRequired(NameElement)){
        TBElement.innerHTML  = 'Họ tên không được bỏ trống!';
        return false;
    }
    else if(!isName(NameElement)){
        TBElement.innerHTML = 'Họ tên không vượt quá 30 ký tự!';
        return false;
    }
    else if(!isRequired(inputEmailRegister)){
        TBElement.innerHTML  = 'Email không được bỏ trống!';
         return false;
    }
    else if(!isEmail(inputEmailRegister)){
        TBElement.innerHTML  = 'Email không hợp lệ!';
        return false;
    }
    else if(!isRequired(PNElement)){
        TBElement.innerHTML  = 'Số điện thoại không được bỏ trống!';
        return false;
    }
    else if(!isPhoneNB(PNElement)){
        TBElement.innerHTML = 'Số điện thoải phải đủ 10 số!';
        return false;
    }
    else if(!isRequired(inputPasswordRegister)){
        TBElement.innerHTML  = 'Mật Khẩu không được bỏ trống!';
        return false;
    }
    else if(!isPassword(inputPasswordRegister)){
        TBElement.innerHTML  = 'Mật khẩu phải có ít nhất 1 chữ cái in Hoa và ít nhất một chữ số!';
        return false;
    }
    else if(!isConfirmedPassword(PWAElement, inputPasswordRegister)){
        TBElement.innerHTML  = 'Mật khẩu không trùng khớp!';
        return false;
    }
    else {
    // array user
    const user = {
      username: inputEmailRegister.value,
      password: inputPasswordRegister.value,
      fullname: NameElement.value,
      phone: PNElement.value
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputEmailRegister.value, json);

    // Thêm user mới đăng kí vào danh sách user
    let ListUser = JSON.parse(localStorage.getItem("ListUser")) || [];
    ListUser.push(user);
    localStorage.setItem("ListUser", JSON.stringify(ListUser));

    alert("Đăng Ký Thành Công");
    window.location.href = "dangnhap.html";
  }
});
