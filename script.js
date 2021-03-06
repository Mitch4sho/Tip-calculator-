// Arrays 
const people = [];

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
        'bills': [],
        'tips': [],
        'billsAndTips': [],
        'average': []
    })

    // this reset the forms values 
    form.name.value = "  ";
    form.lowBill.value = " ";
    form.highBill.value = " ";
    form.tip1.value = " ";
    form.tip2.value = " ";
    form.tip3.value = " ";

    outputSection();
    myFunction();
}

// Tip calculations functions
function tipCalculation(bill) {
    let i = people.length - 1;

    if (i === people.length - 1) {
        if (bill <= people[i].lowest) {
            let tip = Math.round(people[i].tip1 * bill);
            people[i].tips.push(tip);
        } else if (bill > people[i].lowest && bill < people[i].high) {
            let tip = Math.round(people[i].tip2 * bill);
            people[i].tips.push(tip);
        } else {
            let tip = Math.round(people[i].tip3 * bill);
            people[i].tips.push(tip);
        }
    }
}

//  this calculates the average of the tips 
function average() {
    let i = people.length - 1;
    let t = people[i].tips.length - 1;

    let sum = people[i].tips.reduce(function (a, b) {
        return a + b;
    }, 0);

    const averageTip = Math.round(sum / people[i].tips.length);

    people[i].average.push(averageTip);

}

// function to collect restaurant bills from the user calculate your tips and push it to the array
function collectBills(form) {

    let i = people.length - 1;
    if (i === people.length - 1) {
        let newBill = parseInt(form.billAmount.value);
        people[i].bills.push(newBill);

        tipCalculation(newBill);
        let t = people[i].tips.length - 1;
        let totalBill = parseInt(newBill) + parseInt(people[i].tips[t]);
        people[i].billsAndTips.push(totalBill);
        average();
    }

    form.billAmount.value = " ";

    outputBills();

}

// a function to create a new element in the output container 
function outputBills() {
    const outputList = document.getElementById(people.length - 1);
    const i = people.length - 1;
    const t = people[i].average.length - 1;

    if (outputList.getElementsByTagName('li').length < 1) {
        const billsListElement = document.createElement('li');
        const tipsListElement = document.createElement('li');
        const totalCostElement = document.createElement('li');
        const avgTips = document.createElement('li');

        var yourBills = document.createTextNode("Your bills: " + people[i].bills);
        var yourTips = document.createTextNode("Your Tips: " + people[i].tips);
        var yourTotalCost = document.createTextNode("Your Total cost: " + people[i].billsAndTips);
        var totalAvg = document.createTextNode("Average tip: " + people[i].average);


        tipsListElement.appendChild(yourTips);
        billsListElement.appendChild(yourBills);
        totalCostElement.appendChild(yourTotalCost);
        avgTips.appendChild(totalAvg);

        outputList.appendChild(billsListElement);
        outputList.appendChild(tipsListElement);
        outputList.appendChild(totalCostElement);
        outputList.appendChild(avgTips);

    } else {
        const billsListElement = outputList.children[1];
        const tipsListElement = outputList.children[2];
        const totalCostElement = outputList.children[3];
        const avgTips = outputList.children[4];

        const testCode = document.createElement('li');
        const testCode2 = document.createElement('li');
        const testCode3 = document.createElement('li');
        const testCode4 = document.createElement('li');

        const replaceBills = document.createTextNode("Your bills: " + people[i].bills);
        const replaceTips = document.createTextNode("Your Tips: " + people[i].tips);
        const replaceTotal = document.createTextNode("Your Total: " + people[i].billsAndTips);
        const replaceAvg = document.createTextNode("Average tip: " + people[i].average[t]);


        testCode.appendChild(replaceBills);
        testCode2.appendChild(replaceTips);
        testCode3.appendChild(replaceTotal);
        testCode4.appendChild(replaceAvg);

        outputList.replaceChild(testCode, billsListElement);
        outputList.replaceChild(testCode2, tipsListElement);
        outputList.replaceChild(testCode3, totalCostElement);
        outputList.replaceChild(testCode4, avgTips);

    }

}

function outputSection() {
    // this adds the person in the array of people to the div
    let i = people.length - 1;
    let para = document.createElement("h1");
    let person = document.createTextNode("Name: " + people[i].name);
    if (i === people.length - 1) {
        para.appendChild(person);
    }

    //  this adds new div to the output section 
    const outputDiv = document.createElement('div');
    outputDiv.setAttribute('id', 'outputContainer');
    const ulList = document.createElement('ul');
    ulList.id = people.length - 1;
    ulList.appendChild(para);
    outputDiv.appendChild(ulList);
    document.getElementById('personOutput').appendChild(outputDiv);
}

// this function displays the output when submit button pressed
function myFunction() {
    var x = document.getElementById("personOutput");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}