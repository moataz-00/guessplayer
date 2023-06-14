const questions = [
  {
    Number: 1,
    question: "HTML stands for ",
    answers: [
      { text: "HighText Machine Language", correct: "false" },
      { text: "HyperText Markup Language", correct: "true" },
      { text: "HyperText and links Markup Language", correct: "false" },
      { text: "None of these", correct: "false" },
    ],
  },
  {
    Number: 2,
    question: "What does View Source do? ",
    answers: [
      { text: "Nothing", correct: "false" },
      { text: "Opens a new website.", correct: "false" },
      { text: "opens a new page", correct: "false" },
      { text: "Brings up a note pad with the HTML code already used for the site", correct: "true" },
    ],
  },
  {
    Number: 3,
    question: "The correct sequence of HTML tags for starting a webpage is ",
    answers: [
      { text: "Head, Title, HTML, body", correct: "false" },
      { text: "HTML, Head, Title, Body", correct: "true" },
      { text: "HTML, Head, Title, Body", correct: "false" },
      { text: "HTML, Body, Title, Head", correct: "false" },
    ],
  },
  {
    Number: 4,
    question: "Which of the following tag is used for inserting the largest heading in HTML?",
    answers: [
      { text: "h1", correct: "true" },
      { text: "h3", correct: "false" },
      { text: "h5", correct: "false" },
      { text: "h6", correct: "false" },
    ],
  },
  {
    Number: 5,
    question: "Input tag is",
    answers: [
      { text: "an empty tag.", correct: "true" },
      { text: "a format tag.", correct: "false" },
      { text: "All of the above", correct: "false" },
      { text: "None of the above", correct: "false" },
    ],
  },
   {
     Number: 6,
     question: " Which of the following tag is used to make the underlined text?",
     answers: [
       
       { text: "method", correct: "false" },
       { text: "action", correct: "false" },
       { text: "Both method & action", correct: "true" },
       { text: "None of the above", correct: "false" },
     ],
   },
   {
     Number: 7,
     question: "The tags in HTML are",
     answers: [
       
       { text: "in lowercase", correct: "false" },
       { text: "case-sensitive", correct: "false" },
       { text: "in upper case", correct: "false" },
       { text: "not case sensitive", correct: "true" },
     ],
   },
   {
     Number: 8,
     question: "Who is the father of HTML?",
     answers: [
       { text: "Tim Berners-Lee", correct: "true" },
       { text: "Rasmus Lerdorf", correct: "false" },
       { text: "Brendan Eich", correct: "false" },
       { text: "Sergey Brin", correct: "false" },
     ],
   },
   {
     Number: 9,
     question: "Which of the following is used to read an HTML page and render it?",
     answers: [
       
       { text: "Web server", correct: "false" },
       { text: " Web network", correct: "false" },
       { text: "Web browser", correct: "true" },
       { text: " Web matrix", correct: "false" },
     ],
   },
   {
     Number: 10,
     question: "In which part of the HTML metadata is contained?",
     answers: [
       { text: "head tag", correct: "true" },
       { text: "title tag", correct: "false" },
       { text: "html tag", correct: "false" },
       { text: "body tag", correct: "false" },
     ],
   },
];

const questionelememt = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");


let haveIt = [];
function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length <= maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          
          showscore();
          console.log('No more numbers available.')
          
          
        }
        
    }

    
}


function startquiz() {
    
  index = generateUniqueRandom(9);
  console.log(index);
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


//score 
function showscore(){
    resetstate();
    questionelememt.innerHTML=`you scored ${score} out of ${questions.length}!` ;
    nextbtn.innerHTML="Play Again"
    nextbtn.style.display="block"
}

function next(){
    index=generateUniqueRandom(9);
    console.log(index);
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
        location.reload();
    }
})

startquiz();
