function giveEmployeeARaise(employee) {
      employee.salary += 1000;
      return employee
}

let edan = {
      name: "Edan",
      title: 'instructor',
      salary: 1000000
};

let updatedEdan =giveEmployeeARaise(edan);
console.log(edan);
console.log(updatedEdan);