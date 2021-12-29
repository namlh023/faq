$(document).ready(function () {
  const questions = ".js-question";
  const answers = ".js-answer";
  const show_answer = "card__answer--show";
  const show_question = "card__question--show";

  $(questions).click(function () {
    const answer = $(this).next();
    if (answer.hasClass(show_answer)) {
      $(this).removeClass(show_question);
      answer.removeClass(show_answer);
    } else {
      $(answers).each(function () {
        $(this).removeClass(show_answer);
      });
      $(this).addClass(show_question);
      answer.addClass(show_answer);
    }
  });
});
