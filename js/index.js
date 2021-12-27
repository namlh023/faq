const questions = document.querySelectorAll(".js-question");
const answers = document.querySelectorAll(".js-answer");
const show_answer = "card__answer--show";
const show_question = "card__question--show";

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    if (answer.classList.contains(show_answer)) {
      question.classList.remove(show_question);
      answer.classList.remove(show_answer);
    } else {
      answers.forEach((answer) => {
        answer.classList.remove(show_answer);
      });
      question.classList.add(show_question);
      answer.classList.add(show_answer);
    }
  });
});
