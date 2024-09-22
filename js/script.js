document.getElementById('loginBtn').addEventListener('click', function(e){
e.preventDefault();
const loginMobileNumber = getInputValueById("mobilNumber");
const loginPinNumber = getInputValueById("pinNumber");
if(loginMobileNumber === 123 && loginPinNumber === 123){
    window.location.href = './home.html'
}else{
    alert("Wrong Pin or Number")
}

})