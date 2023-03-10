// Write your solution in this file!
const employee = {
    name: "rthii",
    streetAddress: "11 Danforth Road",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee, "address","12 Danforth Road");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const newName = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "thinesh");

function deleteFromEmployeeByKey(employee, key) {
 const deleteName = {...employee};
 delete deleteName["name"];
return deleteName;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee["name"];
    return employee;
}

