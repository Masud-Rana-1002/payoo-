
document.getElementById('addMoneybtn').addEventListener('click', function(event){
    event.preventDefault()
    let addAmount =  getInputValue('AddMoneyInput');
    let availableBalance = getInnerTextById('availableBalance').innerText;
    let availableBalanceConvertToNumber = parseFloat(availableBalance)
    document.getElementById('availableBalance').innerText = availableBalanceConvertToNumber + addAmount


}
    // console.log(addAmount)
)
// console.log(addAmount)

