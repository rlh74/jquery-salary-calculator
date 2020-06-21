$(document).ready(onReady);

const employeeData = [];
let monthlyTotal = 0;

function addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary){
    let object = {employeeFirstName,  employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary};
    employeeData.push(object);
};

// append employeeData to DOM
function appendDataToDom(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary){
    $('#employeeTable').append(`
    <tr>
    <td> ${employeeFirstName} </td>
    <td> ${employeeLastName} </td>
    <td> #${employeeIdNumber} </td>
    <td> ${employeeJobTitle} </td>
    <td> $${employeeAnnualSalary} </td>
    <td> <button id="deleteEmployee">Delete</button> </td>
    </tr>
    </table>`);
    
};


// append monthlyTotal to DOM
function appendTotalToDom(){
    // empties monthlyTotal from HTML element before monthlyTotal is calculated and displayed
    $('#monthlyTotal').empty();    
    // console.log('we bout to append!'); tested if function ran successfully from grabFromInput function
    // Appends total to DOM
    $('#monthlyTotal').append(`Monthly total is: $`, monthlyTotal);
};

// prepare to step thru array to grab multiple salaries
function calculateMonthlyTotal(employeeData){
    // makes sure monthlyTotal is 0 before the function loops through array
    monthlyTotal = 0;
    // loops through employeeData and creates a sum of employeeAnnualSalary property
    for (let i = 0 ; i<employeeData.length;i++){
        monthlyTotal += (Number(employeeData[i].employeeAnnualSalary) / 12);
        // monthlyTotal = monthlyTotal.toFixed(2);
    };
    monthlyTotal = monthlyTotal.toFixed(2); 
    console.log('monthly total is: ', monthlyTotal);
    // passes monthlyTotal to audit function to make sure costs do not exceed budget
    monthlyTotalAudit();
};
function deleteEmployee(){
    //$('#employeeTable').remove();
    $(this).parent().parent().remove();
}

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
    // append employeeData to DOM
    appendDataToDom(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary);
    // sends input to addEmployeeData function
    addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary);
    // clears input fields after user submission
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeIdNumber').val('');
    $('#employeeJobTitle').val('');
    $('#employeeAnnualSalary').val('');
    // console.log('Array is now: ', employeeData); used to test if inputs were added to global array
    // calculates monthly total and appends to DOM
    calculateMonthlyTotal(employeeData);
    appendTotalToDom();
};

// checks if monthly total is under 20,000
function monthlyTotalAudit(){
    if (monthlyTotal > 20000){
        console.log('In this economy?!?!');
        // changes background color if conditional is true
        $('body').css("background-color","red");
    };
};

// runs when page has loaded
function onReady(){
    $('#submitEmployeeForm').on('click', grabFormInput);
    $('#employeeTable').on('click', '#deleteEmployee', deleteEmployee);

};
