// Arrays 
const people = [];
var bills = [];
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
        'tip3': tip3
    })
    console.log(people);


    // this reset the forms values 
    form.name.value = "  ";
    form.lowBill.value = " ";
    form.highBill.value = " ";
    form.tip1.value = " ";
    form.tip2.value = " ";
    form.tip3.value = " ";
}

function tipCalculation(bill) {
    if (bill <= people.lowest) {
        var tip = people.tip1 * bill;
        tips.push(tip);
    } else if (bill > people.lowest && bill < people.high) {
        var tip = people[i].tip2 * bill;
        tips.push(tip);
    } else {
        var tip = people.tip3 * bill;
        tips.push(tip);
    }
    console.log('these are the collect tips ' + tips);
}


// function to collect restaurant bills from the user and push it to the array
function collectBills(form) {
    bills.push(form.billAmount.value);
    form.billAmount.value = " ";
    form.restaurants.value = " ";
    console.log('these are the collect bills ' + bills);

    for (let j = 0; j < bills.length; j++) {
        people.forEach(function () {
            if (bill <= people.lowest) {
                var tip = people.tip1 * bill;
                tips.push(tip);
            } else if (bill > people.lowest && bill < people.high) {
                var tip = people.tip2 * bill;
                tips.push(tip);
            } else {
                var tip = people.tip3 * bill;
                tips.push(tip);
            }
            console.log('these are the collect tips ' + tips);
        });
        let totalBill = parseInt(bills[j]) + parseInt(tips);
        billsAndTips.push(totalBill);
        console.log("This is the total Bill " + totalBill);
    }
}