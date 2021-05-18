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
        },
    ];

    const answers = await getAnswers(questions);

    const manager = new Manager(answers);

    return manager;
};

module.exports = createManager;