$(document).ready(onReady);

const employeeData = [];
let monthlyTotal = 0;

function addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary){
    let object = {employeeFirstName,  employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary};
    employeeData.push(object);
}

// prepare to step thru array to grab multiple salaries
function calculateMonthlyTotal(employeeData){
    // makes sure monthlyTotal is 0 before the function loops through array
    monthlyTotal = 0;
    // loops through employeeData and creates a sum of employeeAnnualSalary property
    for (let i = 0 ; i<employeeData.length;i++){
        monthlyTotal += Number(employeeData[i].employeeAnnualSalary);
    }   console.log('monthly total is: ', monthlyTotal);
};

// append monthlyTotal to DOM
function appendToDom(){
    // empties monthlyTotal from HTML element before monthlyTotal is calculated and displayed
    $('#monthlyTotal').empty();    
    // console.log('we bout to append!'); tested if function ran successfully from grabFromInput function
    // Appends total to DOM
    $('#monthlyTotal').append(`Monthly total is: $`, monthlyTotal);
    //$('#employeeTable').empty();
};

// grabs inputs from form input fields
function grabFormInput(){
    // prevent page from re-loading when button is clicked
    event.preventDefault();
    // console.log('button has been clicked'); click test
    // grabs user input
    let employeeFirstName = $('#employeeFirstName').val();
    let employeeLastName = $('#employeeLastName').val();
    let employeeIdNumber = $('#employeeIdNumber').val();
    let employeeJobTitle = $('#employeeJobTitle').val();
    let employeeAnnualSalary = $('#employeeAnnualSalary').val();
    // sends input to addEmployeeData function
    addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary);
    // clears input fields after user submission
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeIdNumber').val('');
    $('#employeeJobTitle').val('');
    $('#employeeAnnualSalary').val('');
    // console.log('Array is now: ', employeeData); used to test if inputs were added to global array
    // calculates monthly total
    calculateMonthlyTotal(employeeData);
    // begins append to DOM function
    appendToDom();
}

// runs when page has loaded
function onReady(){
    $('#submitEmployeeForm').on('click', grabFormInput)
}
