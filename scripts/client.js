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
    // empty out input field
    $(`#firstName`).val();
    $(`#lastName`).val();
    $(`#employeeID`).val();
    $(`#employeeTitle`).val();
    $(`#annualSalary`).val();
    // console log the value
    showEmployee(firstName);
    showEmployee(lastName);
    showEmployee(employeeID);
    showEmployee(employeeTitle);
    showEmployee(annualSalary);
}

const showEmployee = employeeInfo => {
    console.log(employeeInfo);
}