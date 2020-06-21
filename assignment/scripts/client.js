$(document).ready(onReady);

const employeeData = [];
let monthlyTotal = 0;

function addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary){
    let object = {employeeFirstName,  employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary};
    employeeData.push(object);
}

// prepare to step thru array to grab multiple salaries
// calculateMonthlyTotal(employeeData);
function calculateMonthlyTotal(employeeData){
    monthlyTotal = 0;
    for (let i = 0 ; i<employeeData.length;i++){
        //monthlyTotal = 0;
        // console.log('Employee data is: ', employeeData[i].employeeAnnualSalary);
        monthlyTotal += Number(employeeData[i].employeeAnnualSalary);
    }   console.log('monthly total is: ', monthlyTotal);
};

function grabFormInput(){
    event.preventDefault();
    console.log('button has been clicked');
    let employeeFirstName = $('#employeeFirstName').val();
    let employeeLastName = $('#employeeLastName').val();
    let employeeIdNumber = $('#employeeIdNumber').val();
    let employeeJobTitle = $('#employeeJobTitle').val();
    let employeeAnnualSalary = $('#employeeAnnualSalary').val();
    addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary);
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeIdNumber').val('');
    $('#employeeJobTitle').val('');
    $('#employeeAnnualSalary').val('');
    console.log('Array is now: ', employeeData);
    // unsure if this is a good spot to put the function vvv
    calculateMonthlyTotal(employeeData);
}

function onReady(){
    $('#submitEmployeeForm').on('click', grabFormInput)
}

//console.log(monthlyTotal);
