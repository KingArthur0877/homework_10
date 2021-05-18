const standardQuestions = [
    {
        type:"input",
        message: "Please enter the employees name:",
        name: "name",
    },
    {
        type: "number",
        message: "What is the employees ID number?",
        name: "employeeID",
        validate: (id) => {
            if (isNaN(id)) {
              return 'Please only use numbers to set the employee ID.';
            } else {
              return true;
            }
        }
    },
    {
        type: "input",
        message: "What is the employees email address?",
        name: "email",
        validate: (email) => {
            emailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
            if (emailValid === true) {
              return true
            } else {
              return 'Please enter a valid email address.';
            }
        }
    },
];

module.exports = standardQuestions;