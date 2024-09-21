function getInputValue(idName){
let inputValue = document.getElementById(idName).value;
let inputValueConvertToNumber = parseFloat(inputValue)
return inputValueConvertToNumber
}

function getInnerTextById(idName){
    let innerText = document.getElementById(idName);
    return innerText
}