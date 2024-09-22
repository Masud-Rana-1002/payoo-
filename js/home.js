


// add money

document.getElementById('addMoneyBtn').addEventListener('click', function(e){
    e.preventDefault()
   
    // console.log()
    // return
    const addMoneyInputValue = getInputValueById('addMoneyInput');
    if(isNaN(addMoneyInputValue)){
        document.getElementById('addMonyError').classList.remove('hidden')
        return
    }
    const addMoneyPinNumber = getInputValueById('addMoneyPinNumber');
    if(addMoneyPinNumber === 123){
    const availableBalance = getInnerTextById('availableBalance');

    const availableBalanceConvertToNumber = parseFloat(availableBalance);

    let totalAvailableBalance = availableBalanceConvertToNumber + addMoneyInputValue;
    document.getElementById('availableBalance').innerText = totalAvailableBalance ;
    let types = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerText
    // let lo = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[11].childNodes[3].childNodes[1]
    latestPaymentHistory(types, addMoneyInputValue)
    inputReset('addMoneyPinNumber')
    inputReset('addMoneyInput')
    

    }else{
        document.getElementById('addMonyPinError').classList.remove('hidden')
        return
    }
    
   
   
   
})
function latestPaymentHistory(type, amount, logo){
    const latestPayment =  document.getElementById('latest-payment-history')
    const div = document.createElement('div')
    const d = new Date();
    let text = d.toLocaleDateString();
   
  
    div.innerHTML = `
     <div class="flex items-center justify-between w-11/12 mx-auto mt-3 bg-[#F4F5F7] p-3 rounded-md">
                   <div class="flex items-center justify-center gap-3 ">
                       <div id="img"></div>
                       <div>
                           <p class="font-bold">${type} ${amount}</p>
                           <p>${text}</p>
                       </div>
                   </div>
                   <div>
                       <svg class="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                         </svg>
                         
                   </div>
               </div>
    `
   
    latestPayment.appendChild(div)
 }
// Withdraw
document.getElementById('withdrawBtn').addEventListener('click', function(event){
event.preventDefault();
const availableBalance = getInnerTextById('availableBalance');
const WithdrawPin = getInputValueById('WithdrawPin');
const availableBalanceConvertToNumber = parseFloat(availableBalance);
const WithdrawInputValue = getInputValueById('WithdrawInput');
if(isNaN(WithdrawInputValue)){
    document.getElementById('withdrawMonyError').classList.remove('hidden')
    return
}
if(availableBalanceConvertToNumber < WithdrawInputValue || availableBalanceConvertToNumber <= 0){
    alert("You don't have enough balance")
    return
}
if(WithdrawPin === 123){
    document.getElementById('availableBalance').innerText = availableBalanceConvertToNumber - WithdrawInputValue ;
    inputReset('WithdrawPin')
    inputReset('WithdrawInput')
}else{
   document.getElementById('withdrawPinError').classList.remove('hidden')
   return
}



})

// latest-payment-history



// futar
let und ;

document.getElementById('add-Money').addEventListener('click', function(){
    btnBg('add-Money')
    selectBtn('AddMoneyForm')
   
})
document.getElementById('cash-out').addEventListener('click', function(){
    // document.getElementById('cash-out').classList.add('bg-zinc-100')
    selectBtn('cash-out-btn')
    btnBg('cash-out')
    
})
document.getElementById('transactions').addEventListener('click', function(){
    selectBtn('latest-payment')
    btnBg('transactions')
})
document.getElementById('pay-bill').addEventListener('click', function(){
    btnBg('pay-bill')
    selectBtn('pay-bill')
   
})
document.getElementById('transfer-money').addEventListener('click', function(){
    // document.getElementById('cash-out').classList.add('bg-zinc-100')
    selectBtn('cash-out-btn')
    btnBg('transfer-money')
    
})
document.getElementById('get-bonus').addEventListener('click', function(){
    selectBtn('latest-payment')
    btnBg('get-bonus')
})

selectBtn()
