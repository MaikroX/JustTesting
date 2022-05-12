let questions = [{
        "question": "Wer hat HTML erfunden ?",
        "answer_1": "Robbie Wieliams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer ist der König des Internets ?",
        "answer_1": "Paul Berger",
        "answer_2": "King Knossi",
        "answer_3": "Peter Fox",
        "answer_4": "Max Mustermann",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet HTML ausgeschrieben ?",
        "answer_1": "Hypertext Makeup Language",
        "answer_2": "Hypertext Markup Language",
        "answer_3": "Hypertext Mask Language",
        "answer_4": "Hypertext Mirror Language",
        "right_answer": 2
    },
    {
        "question": "Welches soziale Netzwerk hat Elon Musk im April 2022 für 44 Milliarden gekauft ?",
        "answer_1": "Instagram",
        "answer_2": "Facebook",
        "answer_3": "Tinder",
        "answer_4": "Twitter",
        "right_answer": 4
    },
    {
        "question": "Wie endet eine Domain die auf den Malediven registriert wird ?",
        "answer_1": ".de",
        "answer_2": ".com",
        "answer_3": ".ma",
        "answer_4": ".mv",
        "right_answer": 4
    },
    {
        "question": "Wer hat nach Instagram selbst die meisten Follower (423 Mio.) auf der Plattform Instagram - stand: 07.April 2022 ?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Kylie Jenner",
        "answer_3": "Kim Kardashian",
        "answer_4": "The Rock",
        "right_answer": 1
    },
    {
        "question": "Wie heißt der Gründer des Onlineversandhändlers Amazon ?",
        "answer_1": "Steve Jobs",
        "answer_2": "Jeff Bezos",
        "answer_3": "Elon Musk",
        "answer_4": "Jeve Sobs",
        "right_answer": 4
    },
];


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

let currentQuestion = 0;

function showQuestion() {

    if (currentQuestion >= questions.length) {

    } else {
        let question = questions[currentQuestion];

        document.getElementById('question_number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answer_1;
        document.getElementById('answer_2').innerHTML = question.answer_2;
        document.getElementById('answer_3').innerHTML = question.answer_3;
        document.getElementById('answer_4').innerHTML = question.answer_4;
    }
}

function answer(selection) { /* variable selecetion (Name frei wählbar) - wird übergeben von der onclick funktion bspw. 'answer_1' */
    let question = questions[currentQuestion]; /* definiert: let question = aus dem JSON Array questions[an der Stelle von 0 - definiert aus globaler Variable]*/
    let selectedQuestionNumber = selection.slice(-1); /*definiert: selectedQuestionNumber = selection mit der letzten Stelle im Array wird ausgegeben  */

    let idOfRightAnswer = `answer_${question.right_answer}`;
    if (selectedQuestionNumber == question.right_answer) { /* Wenn übereinstimmung dann Richtig oder Falsch */
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next_Button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; /* Variable wird von 0 auf 1 erhöht*/
    document.getElementById('next_Button').disabled = true;

    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}