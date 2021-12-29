const questions = document.querySelectorAll(".js-question");
const answers = document.querySelectorAll(".js-answer");
const show_answer = "card__answer--show";
const show_question = "card__question--show";

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const question_active = document.querySelector(".card__question--show");
    if (question_active && question_active !== question) {
      question_active.classList.remove(show_question);
      question_active.nextElementSibling.classList.remove(show_answer);
    }
    question.classList.toggle(show_question);
    question.nextElementSibling.classList.toggle(show_answer);
  });
});
