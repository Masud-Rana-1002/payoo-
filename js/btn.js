function selectBtn(idName){
    document.getElementById("AddMoneyForm").classList.add('hidden')
    document.getElementById("cash-out-btn").classList.add('hidden')


    document.getElementById(idName).classList.remove('hidden')
    document.getElementById('latest-payment').classList.add('hidden')
    document.getElementById(idName).classList.remove('hidden')

   
}

function btnBg(id){
    // document.getElementById(id).classList.add('bg-zinc-100')
    document.getElementById("add-Money").classList.remove('bg-zinc-100')
    document.getElementById("cash-out").classList.remove('bg-zinc-100')
    document.getElementById("transactions").classList.remove('bg-zinc-100')
    document.getElementById("pay-bill").classList.remove('bg-zinc-100')
    document.getElementById("get-bonus").classList.remove('bg-zinc-100')
    document.getElementById("transfer-money").classList.remove('bg-zinc-100')

    document.getElementById(id).classList.add('bg-zinc-100')
    
}