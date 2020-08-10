// The groups of People
const people = [];

// Functions
saveNewPerson = (form) => {
    event.preventDefault();
    const name = form.name.value;
    const lowBill = form.lowBill.value;
    people.push({
        'name': name,
        'lowestbill': lowBill
    })
    form.name.value = " ";
    form.lowBill.value = " ";
    console.log(people);
}