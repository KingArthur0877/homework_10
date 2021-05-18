const Engineer = require("./lib/Engineer");
const standardQuestions = require("./standardQuestions");
const getAnswers = require("./getAnswers");

const createEngineer = async () => {
    const questions = [
        ...standardQuestions,
        {
            type:"input",
            message: "Enter the engineers github profile username.",
            name: "github",
        },
    ];

    const answers = await getAnswers(questions);

    const engineer = new Engineer(answers);

    return engineer;
};

module.exports = createEngineer