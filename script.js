const submitBtnOne = document.querySelector('.submitBtnOne'); // this btn will be linked to your settings submit
const submitBtnTwo = document.querySelector('.submitBtnTwo'); // this btn will be linked to your settings submit

submitBtnOne.addEventListener('click', createPersonObject);
// submitBtnTwo.addEventListener('click')


let person = {
    name: '',
    lowestBill: 0,
    mediumBill: 0,
    highestBill: 0,
    tipOne: 0,
    tipTwo: 0,
    tipThree: 0,
};


//functions
function createPersonObject() {
    const result = new person();
    result.name = document.getElementById('name').value;
    result.lowestBill = document.getElementById('lowBill').value;
    result.mediumBill = document.getElementById('medBill').value;
    result.highestBill = document.getElementById('highBill').value;
    result.tipOne = document.getElementById('tip1').value;
    result.tipTwo = document.getElementById('tip2').value;
    result.tipThree = document.getElementById('tip3').value;
}


const newPerson = document.getElementById('name').value;