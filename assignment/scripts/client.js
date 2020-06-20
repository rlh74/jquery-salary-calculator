$(document).ready(onReady);
console.log('js');

const employeeData = [];

function addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary){
    let object = {employeeFirstName,  employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary};
    employeeData.push(object);
}

function grabFormInput(){
    event.preventDefault();
    console.log('button has been clicked');
    let employeeFirstName = $('#employeeFirstName').val();
    let employeeLastName = $('#employeeLastName').val();
    let employeeIdNumber = $('#employeeIdNumber').val();
    let employeeJobTitle = $('#employeeJobTitle').val();
    let employeeAnnualSalary = $('#employeeAnnualSalary').val();
    addEmployeeData(employeeFirstName, employeeLastName, employeeIdNumber, employeeJobTitle, employeeAnnualSalary);
    console.log('Array is now: ', employeeData);
}

function onReady(){
    $('#submitEmployeeForm').on('click', grabFormInput)
    // console.log('jq');
}

