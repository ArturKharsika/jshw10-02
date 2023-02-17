let tests = [
    '1 + 1 = 2 ?', true,
    '2 + 2 = 5 ?', false,
    '3 + 4 = 5 ?', false,
]

let correctAnswers=0;
while (passtest = confirm('Желаете пройти тест?')) {
    let correctAnswers=0;
    let userAnswer = confirm(tests[0]);
    if (userAnswer == tests[1]) {
        correctAnswers++;
    } else {
        correctAnswers--;
    }

    let userAnswer1 = confirm(tests[2]);
    if (userAnswer1 == tests[3]) {
        correctAnswers++;
    } else {
        correctAnswers--;
    }

    let userAnswer2 = confirm(tests[4]);
    if (userAnswer2 == tests[5]) {
        correctAnswers++;
    } else {
        correctAnswers--;
    }
    
    if (correctAnswers > 0) {
        alert('Тест пройден! Правильных ответов:' + ' ' + correctAnswers);
        let tryAgain = confirm('Желаете пройти тест ещё раз?');
        if (tryAgain == false) {
            break;
        } else {

        }
    } else {
        alert('Тест не пройден. Слишком много неправильных ответов' + ' (' + correctAnswers + ')');
        break;
    }
}