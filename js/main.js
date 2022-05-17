let rightQuestions = 0;
let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function refreshPage() {
    window.location.reload();
}

function comingsoon() {
    alert("This function coming soon...")
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('quiz-container').innerHTML = ``;

        document.getElementById('quiz-container').innerHTML += scoreCardTemp();
        document.getElementById('amount_Questions').innerHTML = questions.length;
        document.getElementById('amount_Of_Right_Questions').innerHTML = rightQuestions;
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
        rightQuestions++;
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