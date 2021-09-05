// onReady function to load when the page is loaded
const onReady = () => {
    // provides button operation that calls the getEmployee Function
    $( '#submitEmployeeButton').on( 'click', getEmployee );
    // provides functionality to the added delete buttons in the table to remove the closest TR tags from the DOM
    $( `#employeeTable`).on( 'click', '#deleteEmployee', function(){$(this).closest('tr').remove();});
}

// calls the onReady function when the document is loaded
$( document ).ready( onReady );

// sets a global variable for tracking the totalMonthlySalary
let totalMonthlySalary = 0;

// getEmployee function that pulls information from the input fields and pushes those values to the showEmployee function
const getEmployee = () => {
    
    //target an element by ID and get its .val()
    let firstName = $(`#firstName`).val();
    let lastName = $(`#lastName`).val();
    let employeeID = $(`#employeeID`).val();
    let employeeTitle = $(`#employeeTitle`).val();
    let annualSalary = $(`#annualSalary`).val();

    // converts the input Annual Salary to a number type
    let numberSalary = Number(annualSalary.replace('$', ''));

    // empty out input fields
    $(`#firstName`).val('');
    $(`#lastName`).val('');
    $(`#employeeID`).val('');
    $(`#employeeTitle`).val('');
    $(`#annualSalary`).val('');

    // pass the input data to the functions to put on the DOM
    showEmployee(firstName, lastName, employeeID, employeeTitle, annualSalary);
    monthlySalary(numberSalary);
}

// updates the Total monthly Salary on the DOM
const monthlySalary = (numberSalary) => {
    // empties anything currently in the monthly salary
    $( `#totalMonthlySalary`).empty();
    // adds the current value of Total Monthly Salary to the passed annual salary parameter divided by 12 to get monthly salary
    $( `#totalMonthlySalary`).append(`\$${totalMonthlySalary += numberSalary/12}`);
    // if the Total Monthly Salary value is greater than $20000, updates the background to be red and font to be white, otherwise removes those properties if it's below
    if (totalMonthlySalary > 20000){
        $( `#totalSalary`).css( `background-color` , `red`);
        $( `#totalSalary`).css( `color` , `white`);
    } else {
        $( `#totalSalary` ).removeProperty ( `background-color`);
        $( `#totalSalary` ).removeProperty ( `color` );
    }
}

// passes data gathered from getEmployee function to be able to append to the DOM
const showEmployee = (firstName, lastName, employeeID, employeeTitle, annualSalary) => {
    // gets the table element from HTML
    let el = $ ('#employeeTable');
    //appends the relevant information for the input employee to the table as a new row with the different data points, as well as a button to delete the current employee
    el.append(`<tr class="employeeRow"><td>${firstName}</td><td>${lastName}</td><td>${employeeID}</td><td>${employeeTitle}</td><td>${annualSalary}</td><td><button id="deleteEmployee">Delete</button></td></tr>`);
}

const deleteEmployee = () => {
    
}