// Arrays 
const people = [];
const bills = [];
const tips = [];
const billsAndTips = [];

// Functions

// function to create new person object and push in to the people array 
saveNewPerson = (form) => {

    event.preventDefault();
    // values from the forms that are assign to the object
    let name = form.name.value;
    let lowBill = parseInt(form.lowBill.value);
    let highBill = parseInt(form.highBill.value);
    let tip1 = form.tip1.value / 100;
    let tip2 = form.tip2.value / 100;
    let tip3 = form.tip3.value / 100;

    // this push the properties to the PEOPLE array
    people.push({
        'name': name,
        'lowest': lowBill,
        'high': highBill,
        'tip1': tip1,
        'tip2': tip2,
        'tip3': tip3,
    })
    console.log(people);

    // this reset the forms values 
    form.name.value = "  ";
    form.lowBill.value = " ";
    form.highBill.value = " ";
    form.tip1.value = " ";
    form.tip2.value = " ";
    form.tip3.value = " ";

    // this creates a new element in the output container for the name
    for (let f = 0; f < people.length; f++) {
        var para = document.createElement("P");
        var t = document.createTextNode("Name: " + people[f].name);
        para.appendChild(t);
        document.getElementById('output').appendChild(para);
    }
}

function tipCalculation(bill) {
    for (let i = 0; i < people.length; i++) {
        if (bill <= people[i].lowest) {
            let tip = people[i].tip1 * bill;
            tips.push(tip);
        } else if (bill > people[i].lowest && bill < people[i].high) {
            let tip = people[i].tip2 * bill;
            tips.push(tip);
        } else {
            let tip = people[i].tip3 * bill;
            tips.push(tip);
        }
    }
    console.log('these are the collected tips ' + tips);
}


// function to collect restaurant bills from the user calculate your tips and push it to the array
function collectBills(form) {
    bills.push(form.billAmount.value);
    form.billAmount.value = " ";
    form.restaurants.value = " ";
    console.log('these are the collected bills ' + bills);

    for (let j = 0; j < bills.length; j++) {
        var bill = bills[j];
    }
    tipCalculation(bill);
    let totalBill = parseInt(bill) + parseInt(tips);
    billsAndTips.push(totalBill);
    console.log("All your bills " + billsAndTips);
}
// a function to create a new element in the output container 
function myFunction() {
    for (let f = 0; f < people.length; f++) {
        var li1 = document.createElement('li');
        var t = document.createTextNode("Your bills: " + bill[f]);
        para.appendChild(t);
        document.getElementById('output').appendChild(para);
    }
}