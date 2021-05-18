const Intern = require("./lib/Intern");
const standardQuestions = require("./standardQuestions");
const getAnswers = require("./getAnswers");

const createIntern = async () => {
    const questions = [
        ...standardQuestions,
        {
            type:"input",
            message: "What school does the intern go to?",
            name:"school",
        },
    ];

    const answers = await getAnswers(questions);

    const intern = new Intern(answers);

    return intern;
};

module.exports = createIntern;