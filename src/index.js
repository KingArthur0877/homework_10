const generateHTML = require("./utils/generateHTML");
const allEmployees = require("./allEmployees");
const writeToFile = require("./writeToFile");

const init = async () => {
    const employees = await allEmployees();

    const generateHTML = generateHTML(employees);

    writeToFile(generateHTML);
};

init();