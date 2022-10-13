/*eslint-env es6*/
/*jslint node: true */
const quizData = [
  {
      question: "Which language runs in a web browser",
      a: "Java",
      b: "c",
      c: "Python",
      d: "Javascript",
      correct: "d",
  },
  {
    question: "What does CSS stands for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {

    question: "What does HTML stands for?" ,
    a: "Hypertext Markup Language" ,
    b: "Hypertext Markdown Language" ,
    c: "Hyperloop Machine Language" ,
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {

    question: "Javascript is launched in which year?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
	{

    question: "Javascript is an ________language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "none of the above",
    correct: "a",
  },
	{

    question: "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both a and b",
    d: "none of the above",
    correct: "a",
  },
	{

    question: "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementbyId()",
    b: "getElementsByClassName()",
    c: "Both a and b",
    d: "none of the above",
    correct: "c",
  },
	{

    question: "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert",
    d: "All of the above",
    correct: "d",
  },
	{
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    correct: "a",
  },
	//{
   // question: "What will be the output of the following code snippet?",

     //     "<script type="text/javascript">,
//a = 5 + "9";
//document.write(a);
//</script>",
		
		
   // a: "compilation Error",
   // b: "14",
   // c: "Runtime Error",
   // d: "59",
   // correct: "d",
 // },
	{
    question: "Which of the following is not a Javascript framework?",
    a: "Node",
    b: "Vue",
    c: "React",
    d: "Cassandra",
    correct: "d",
  },
	
];

/*eslint-env browser*/
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

   const currentQuizData = quizData[currentQuiz]

   questionEL.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if(answer) {
    if(answer === quizData[currentQuiz].correct){
      score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    }else {
       quiz.innerHTML =`
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
       <button onclick="history.go(0)">Play Again</button>

      `
    }
  }
});
