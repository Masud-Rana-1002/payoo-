function getInputValueById(inputIdName){
const inputValue = document.getElementById(inputIdName).value;
const inputValueConvertToNumber = parseFloat(inputValue);
return inputValueConvertToNumber
}


function getInnerTextById(innerTextIdName){
    const innerText = document.getElementById(innerTextIdName).innerText;
    
    return innerText
}


function inputReset(idName){
let inputIdName = document.getElementById(idName).value = ''
return inputIdName
}