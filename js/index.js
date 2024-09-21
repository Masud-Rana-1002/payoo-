// getInputValue()
document.getElementById('loginBtn').addEventListener('click', function(event){
    event.preventDefault()
    let mobilNumber = getInputValue('mobilNumber')
    let pinNumber = getInputValue('pinNumber')
    if(mobilNumber === '1234' && pinNumber === '1234'){
         window.location.href = '/home.html'
    }
})