// Xử lý email
var inputEmail = document.querySelector('.footer-signup-input')
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var btn = document.querySelector('.footer-signup-btn')
var errorMesageElement = document.querySelector('.form-error');
var error;
btn.onclick = function (e) {
    var email = inputEmail.value;
    if (!regex.test(email)) error = "Vui lòng nhập email";
    if (error) errorMesageElement.innerText = error;
}
inputEmail.oninput = function(e){
    errorMesageElement.innerText = "";
}
