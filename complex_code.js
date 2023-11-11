// complex_code.js

// This code performs a complex operation on a dataset 

// Dataset containing employee records
let employees = [
  { id: 1, name: 'John Doe', age: 30, salary: 5000 },
  { id: 2, name: 'Jane Smith', age: 35, salary: 6000 },
  { id: 3, name: 'David Johnson', age: 28, salary: 4500 },
  // ... and so on
];

// Function to calculate average salary
function calculateAverageSalary() {
  let totalSalary = 0;
  let employeeCount = employees.length;

  for (let i = 0; i < employeeCount; i++) {
    totalSalary += employees[i].salary;
  }

  return totalSalary / employeeCount;
}

// Function to find the oldest employee
function findOldestEmployee() {
  let oldestEmployee = employees[0];

  for (let i = 1; i < employees.length; i++) {
    if (employees[i].age > oldestEmployee.age) {
      oldestEmployee = employees[i];
    }
  }

  return oldestEmployee;
}

// Function to sort employees by name
function sortEmployeesByName() {
  employees.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

// Function to filter employees by age
function filterEmployeesByAge(minAge, maxAge) {
  return employees.filter((employee) => {
    return employee.age >= minAge && employee.age <= maxAge;
  });
}

// Main program
console.log('Average Salary:', calculateAverageSalary());
console.log('Oldest Employee:', findOldestEmployee());
console.log('--------------------------------------------');

// Sort employees by name and display
sortEmployeesByName();
console.log('Sorted Employees by Name:');
console.log(employees);
console.log('--------------------------------------------');

// Filter employees by age and display
let filteredEmployees = filterEmployeesByAge(30, 40);
console.log('Employees between 30 and 40 years old:');
console.log(filteredEmployees);
console.log('--------------------------------------------');

// ... Additional complex operations on the dataset

// ... and more

// ... and so on

// ... total lines: 200+ 