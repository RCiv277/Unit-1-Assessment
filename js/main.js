console.log('hello')
let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')
let userInput = document.getElementById('user-input')
let displayedSum = document.getElementById('total')
var sumTotal = 0


plusBtn.addEventListener('click' , addTogether)





minusBtn.addEventListener('click' , subtractTogether)








function addTogether(){
    let input = Number(userInput.value)
    isNaN(input) ? console.log(NaN):sumTotal = sumTotal + input;
    displayedSum.innerHTML = `${sumTotal}`
    sumTotal >= 0 ? displayedSum.style.color = 'black' : displayedSum.style.color = 'red';
}
function subtractTogether(){
    let input = Number(userInput.value)
    isNaN(input) ? console.log(NaN):sumTotal = sumTotal - input;
    displayedSum.innerHTML = `${sumTotal}`
    sumTotal >= 0 ? displayedSum.style.color = 'black' : displayedSum.style.color = 'red';

}