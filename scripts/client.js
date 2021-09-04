const onReady = () => {
    console.log( 'JQ' );
    $( '#submitEmployeeButton').on( 'click', getEmployee );
}

$( document ).ready( onReady );

const getEmployee = () => {
    //target an element by ID and get its .val()
    let firstName = $(`#firstName`).val();
    let lastName = $(`#lastName`).val();
    let employeeID = $(`#employeeID`).val();
    let employeeTitle = $(`#employeeTitle`).val();
    let annualSalary = $(`#annualSalary`).val();
    // empty out input fields
    $(`#firstName`).val('');
    $(`#lastName`).val('');
    $(`#employeeID`).val('');
    $(`#employeeTitle`).val('');
    $(`#annualSalary`).val('');
    // pass the input data to the function to put on the DOM
    showEmployee(firstName, lastName, employeeID, employeeTitle, annualSalary);
}

const showEmployee = (firstName, lastName, employeeID, employeeTitle, annualSalary) => {
    console.log(firstName, lastName, employeeID, employeeTitle, annualSalary);
    let el = $ ('#employeeTable');
    el.append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${employeeID}</td><td>${employeeTitle}</td><td>${annualSalary}</td><td><button id="deleteEmployee">Delete</button></td></tr>`);
}