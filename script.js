// The groups of People
const people = [];

// Functions

// function to create new person with all there settings in place ;
saveNewPerson = (form) => {
    event.preventDefault();
    // values from the forms
    const name = form.name.value;
    const lowBill = form.lowBill.value;
    const medBill = form.medBill.value;
    const highBill = form.highBill.value;
    const tip1 = form.tip1.value / 100;
    const tip2 = form.tip2.value / 100;
    const tip3 = form.tip3.value / 100;

    people.push({
        'name': name,
        'lowest': lowBill,
        'medium': medBill,
        'high': highBill,
        'tip1': tip1,
        'tip2': tip2,
        'tip3': tip3
    })

    console.log(people);

    form.name.value = "  ";
    form.lowBill.value = " ";
    form.medBill.value = " ";
    form.highBill.value = " ";
    form.tip1.value = " ";
    form.tip2.value = " ";
    form.tip3.value = " ";

    // tips calculations functions 
    const tips = [];

    tipCalculation(45);

    function tipCalculation(bill) {

        if (bill <= lowBill) {
            let tip = tip1 * bill;
        } else if (bill > lowBill && bill < highBill) {
            let tip = tip2 * bill;
        } else {
            let tip = tip3 * bill;
        }
        tips.push(tip);
    }
    console.log(tips);
}