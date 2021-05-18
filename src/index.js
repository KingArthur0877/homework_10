const generateHTML = require()
const allEmployees = require()
const writeToFile = require()

const init = async () => {
    const employees = await allEmployees();

    const generateHTML = generateHTML(employees);

    writeToFile(generateHTML);
};

init();