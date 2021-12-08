// function giveEmployeeARaise(employee) {
//       employee.salary += 1000;
//       return employee
// }


//as arrow function
let giveEmployeeARaise = (employee) => {
      employee.salary += 1000;
      return employee;
}

// let addNumber = (firstNumber, secondNumber) => {
//       return firstNumber + secondNumber;
// }

//equivalent

let addNumber = (firstNumber, secondNumber) => firstNumber + secondNumber;

let edan = {
      name: "Edan",
      title: 'instructor',
      salary: 1000000
};

let updatedEdan = giveEmployeeARaise(edan);
console.log(edan);
console.log(updatedEdan);