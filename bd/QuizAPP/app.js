const newquiz = document.querySelector("#makeQuiz");
const quizquestion = document.querySelector(".quizquestion");
const submit = document.querySelector(".checkanswer");
const result = document.querySelector(".result");
const answer = document.querySelectorAll(".answer");
const quizinput = document.querySelectorAll(".quizinput");
const quizanswer = document.querySelector(".quizanswer");
const textinput = document.querySelector(".textinput");

let correct;

newquiz.addEventListener("click", () => {
  result.innerHTML = "";
  quizquestion.innerHTML = createquiz();
  createanswer();
  quizanswer.style = "display:block";
});

submit.addEventListener("click", () => {
  if (quizquestion.innerHTML == "") {
    result.innerHTML = "there is no quiz";
  } else {
    if (window.location.pathname == "/textquiz.html") {
      if (textinput.value == correct) {
        result.innerHTML = "answer is correct";
        result.style = "color:green";
      } else {
        result.innerHTML = "answer is wrong";
        result.style = "color:red";
      }
    } else {
      quizinput.forEach((input) => {
        if (input.checked) {
          if (correct == input.nextElementSibling.innerHTML) {
            result.innerHTML = "answer is correct";
            result.style = "color:green";
            input.checked = false;
          } else {
            result.innerHTML = "answer is wrong";
            result.style = "color:red";
            input.checked = false;
          }
        }
      });
    }
  }
});
function createquiz() {
  var item1 = CreateRandomNumber();
  var item2 = CreateRandomNumber();
  let operators = [`*`, `-`, `+`, `/`];
  let oparatorquestion =
    operators[Math.floor(Math.random() * operators.length)];
  var question = `${item1} ${oparatorquestion} ${item2} = ?`;
  correct = calculate(item1, item2, oparatorquestion);
  return question;
}
function createanswer() {
  let span = Math.floor(Math.random() * answer.length);
  let randomspan = answer[span];
  randomspan.innerHTML = correct;
  for (i = 0; i < answer.length; i++) {
    if (!(i == span)) {
      let option = CreateRandomNumber();
      if (!(option == correct)) answer[i].innerHTML = option;
      else {
        option = CreateRandomNumber();
        answer[i].innerHTML = option;
      }
    }
  }
}
function CreateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
function calculate(item1, item2, operator) {
  if (operator == "+") {
    return item1 + item2;
  } else if (operator == "/") {
    return (item1 / item2).toFixed(3);
  } else if (operator == "-") {
    return item1 - item2;
  } else if (operator == "*") {
    return item1 * item2;
  }
}
