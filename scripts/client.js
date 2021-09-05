const onReady = () => {
    console.log( 'JQ' );
    $( '#submitEmployeeButton').on( 'click', getEmployee );
    $( `#employeeTable`).on( 'click', '#deleteEmployee', function(){$(this).closest('tr').remove();});
}

$( document ).ready( onReady );

let totalMonthlySalary = 0;

const getEmployee = () => {
    //target an element by ID and get its .val()
    let firstName = $(`#firstName`).val();
    let lastName = $(`#lastName`).val();
    let employeeID = $(`#employeeID`).val();
    let employeeTitle = $(`#employeeTitle`).val();
    let annualSalary = $(`#annualSalary`).val();

    let numberSalary = Number(annualSalary.replace('$', ''));

    // empty out input fields
    $(`#firstName`).val('');
    $(`#lastName`).val('');
    $(`#employeeID`).val('');
    $(`#employeeTitle`).val('');
    $(`#annualSalary`).val('');
    // pass the input data to the function to put on the DOM
    showEmployee(firstName, lastName, employeeID, employeeTitle, annualSalary);
    monthlySalary(numberSalary);
}

const monthlySalary = (numberSalary) => {
    $( `#totalMonthlySalary`).empty();
    $( `#totalMonthlySalary`).append(`\$${totalMonthlySalary += numberSalary/12}`);
    if (totalMonthlySalary > 20000){
        $( `#totalSalary`).css( `background-color` , `red`);
        $( `#totalSalary`).css( `color` , `white`);
    }
}

let employeeCounter = 0;
const showEmployee = (firstName, lastName, employeeID, employeeTitle, annualSalary) => {
    console.log(firstName, lastName, employeeID, employeeTitle, annualSalary);
    employeeCounter++;
    let el = $ ('#employeeTable');
    el.append(`<tr class="employeeRow${employeeCounter}"><td>${firstName}</td><td>${lastName}</td><td>${employeeID}</td><td>${employeeTitle}</td><td>${annualSalary}</td><td><button id="deleteEmployee">Delete</button></td></tr>`);
}

const deleteEmployee = () => {
    console.log('In the deleteEmployee');
    $( `.employeeRow` ).remove();
}