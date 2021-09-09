// onReady function to load when the page is loaded
const onReady = () => {
    // provides button operation that calls the getEmployee Function
    $( '#submitEmployeeButton').on( 'click', getEmployee );
    // provides functionality to the added delete buttons in the table to call the deleteEmployee function
    $( `#employeeTable`).on( 'click', '.deleteEmployee', deleteEmployee);
}

// calls the onReady function when the document is loaded
$( document ).ready( onReady );

// sets a global variable for tracking the totalMonthlySalary
let totalMonthlySalary = 0;
// sets a global variable of array of employees
let employees = [];

// getEmployee function that pulls information from the input fields and pushes those values to the showEmployee function
const getEmployee = () => {
    
    // assign values inputted from input into an object describing the employee
    let newEmployee = {
        firstName: $(`#firstName`).val(),
        lastName: $(`#lastName`).val(),
        employeeID: $(`#employeeID`).val(),
        employeeTitle: $(`#employeeTitle`).val(),
        annualSalary: $(`#annualSalary`).val()
    }

    // adds new employee to the array of employees
    employees.push(newEmployee);

    // target the element to make the changes to
    let el = $ ('#employeeTable');
    el.empty();
    //appends the relevant information for the input employee to the table as a new row with the different data points, as well as a button to delete the current employee
    el.append(`<th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th><th></th>`);

    // loops through the employee Array to add each submission to the DOM
    for(let i = 0; i < employees.length; i++){
        //appends the relevant information for the input employee to the table as a new row with the different data points, as well as a button to delete the current employee
        el.append(`<tr class="employeeRow"><td>${employees[i].firstName}</td><td>${employees[i].lastName}</td><td class="employeeID">${employees[i].employeeID}</td>
        <td>${employees[i].employeeTitle}</td><td class="employeeSalary">${employees[i].annualSalary}</td><td><button class="deleteEmployee">Delete</button></td></tr>`);
    }
    // converts the passed Annual Salary to a number type
    let numberSalary = Number($(`#annualSalary`).val().replace('$', ''));

    // empty out input fields
    $(`#firstName`).val('');
    $(`#lastName`).val('');
    $(`#employeeID`).val('');
    $(`#employeeTitle`).val('');
    $(`#annualSalary`).val('');

    // pass the input data to the functions to put monthly Salary on the DOM
    monthlySalary(numberSalary);
}

// updates the Total monthly Salary on the DOM
const monthlySalary = (numberSalary) => {
    
    totalMonthlySalary += numberSalary/12
    // empties anything currently in the monthly salary
    $( `#totalMonthlySalary`).empty();
    // adds the current value of Total Monthly Salary to the passed annual salary parameter divided by 12 to get monthly salary
    $( `#totalMonthlySalary`).append(`\$${totalMonthlySalary.toFixed(2)}`);
    // if the Total Monthly Salary value is greater than $20000, updates the background to be red and font to be white
    if (totalMonthlySalary > 20000){
        $( `#totalSalary`).css( `background-color` , `red`);
        $( `#totalSalary`).css( `color` , `white`);
    } 
    // removes styling if the Total Monthly Salary falls below or equal to 20000
    if (totalMonthlySalary <= 20000) {
        $( `#totalSalary` ).removeAttr( `style`);
    }
}



function deleteEmployee () {
    // find the salary of the employee that was deleted from the table
    let foundSalary = $(this).parent().parent().children(`.employeeSalary`).text();
   
    // change that salary to a number type
    foundSalary = Number(foundSalary.replace('$', ''));

    // pass that salary to the monthly Salary function as a negative number 
    monthlySalary(-foundSalary);

    // find the ID of the deleted Employee
    let deletedEmployeeID = $(this).parent().parent().children( `.employeeID`).text();

    // loop through the employees to delete the one that matches the ID of the deleted employee
    for (let i=0; i < employees.length; i++){
        if (employees[i].employeeID === deletedEmployeeID){
            employees.splice(i, 1);
        }
    }
    // when clicking a deleteEmployee button removes the nearest Table Row attribute as well as all children
    $( this ).closest('tr').remove();
}