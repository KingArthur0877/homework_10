const Manager = require("./lib/Manager");
const standardQuestions = require("./standardQuestions");
const getAnswers = require("./getAnswers");

const createManager = async () => {
    const questions = [
        ...standardQuestions,
        {
            type: "input",
            message: "What is the managers office number?",
            name: "officeNumber",
            validate: (officeNumber) => {
                if (isNaN(officeNumber)) {
                  return 'Please enter a valid office number.';
                } else {
                  return true;
                }
            }
        },
    ];

    const answers = await getAnswers(questions);

    const manager = new Manager(answers);

    return manager;
};

module.exports = createManager;