const questions = [
  {
    Number: 1,
    question: "1- Won a world cup <br><br> 2- Played for : Bayern Munich , FC Köln , Arsenal , Inter , Antalyaspor , Vissel Kobe<br><br> 3- Current club : Górnik Zabrze<br><br> 4- Teammates : Miroslav Klose , Oliver Kahn , Mikel Arteta <br><br> ",
    answers: [
      { text: "Ozil", correct: "false" },
      { text: "Podolski", correct: "true" },
      { text: "Philipp Lahm", correct: "false" },
      { text: "Bastian Schweinsteiger", correct: "false" },
    ],
  },
  {
    Number: 2,
    question: "1- Won English FA Cup , a world cup<br><br>2- Played for : Hannover 96 , Werder Bremen , Arsenal <br><br> 3- Retired <br><br> 4- Teammates : Naldo , Alex Oxlade-Chamberlain  ",
    answers: [
      { text: "Nuri Sahin", correct: "false" },
      { text: "Sebastian Kehl", correct: "false" },
      { text: "Martín Demichelis", correct: "false" },
      { text: "Per Mertesacker", correct: "true" },
    ],
  },
  {
    Number: 3,
    question: "1- Won Saudi Cup<br><br> 2- Play in a world cup<br><br> 3- Played for : Al-Hilal , Al-Fateh<br><br> 4- Teammates : Moussa Marega , Mohamed Kanno ",
    answers: [
      { text: "Luciano Vietto", correct: "false" },
      { text: "Khalifah Al-Dawsari", correct: "true" },
      { text: "Salem Al-Dawsari", correct: "false" },
      { text: "Mohammed Al-Fatil", correct: "false" },
    ],
  },
  {
    Number: 4,
    question: "1- Won Conference League winner<br><br>2- Played for : AC Milan , Genoa , Monaco , AS Roma<br><br> 3- Teammates : Edin Dzeko , Radja Nainggolan , José Crespo , Fabinho ",
    answers: [
      { text: "Stephan El Shaarawy", correct: "true" },
      { text: "Mohamed Salah", correct: "false" },
      { text: "Paulo Dybala", correct: "false" },
      { text: "Lorenzo Pellegrini", correct: "false" },
    ],
  },
];

const questionelememt = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");

function startquiz() {
  index = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showquestion();
}

function showquestion() {
   resetstate()

  //show questions

  let currentquestion = questions[index];
  let questionNo = currentquestion.Number;
  questionelememt.innerHTML =  currentquestion.question;

  // show answers

  currentquestion.answers.forEach( answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectanswer);

    console.log(button);
  });
}

//remove all preveious answers

 function resetstate(){
 nextbtn.style.display="none";
 while(answerbtn.firstChild){
     answerbtn.removeChild(answerbtn.firstChild);
 }
 }


//select answer

function selectanswer(e) {
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct === "true";
  if (iscorrect) {
    selectbtn.classList.add("corect");
    score++;
  } else {
    selectbtn.classList.add("incorect");
  }

  //check where is the correct answer

  Array.from(answerbtn.children).forEach( button => {
    if (button.dataset.correct === "true") {
      button.classList.add("corect");
    }
    button.disabled = true;
  });

  nextbtn.style.display = "block";
}

function showscore(){
    resetstate();
    questionelememt.innerHTML=`you scored ${score} out of ${questions.length}!` ;
    nextbtn.innerHTML="Play Again"
    nextbtn.style.display="block"
}

function next(){
    index++;
    if(index<questions.length){
        showquestion();

    }else{
        showscore();
    }

}

nextbtn.addEventListener("click",()=>{
    if(index<questions.length){
        next();
    }else{
        startquiz();
    }
})

startquiz();
