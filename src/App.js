import React, { useEffect } from "react";
import './index.css';
import Question from "../src/components/question"
import {nanoid} from "nanoid";


export default function App() {
  const [quiz, setQuiz] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [answerOption, setAnswerOption] = React.useState({
    clicked: false
  })

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => setQuestions(getQuestions(data.results)))
  }, [quiz])

  function startQuiz(){
    setQuiz(true)
  }
  
  function getQuestions(listOfQuestions){
      const resetQuestions = listOfQuestions.map(question => {
        return (
          {
            id: nanoid(),
            question: question.question,
            correctAnswer: question.correct_answer,
            answers: settingAnswers(shuffleAnswers([...question.incorrect_answers, question.correct_answer]), question.correct_answer)
          }
        )
      })
      return resetQuestions
  }


  function settingAnswers(listOfAnswers, correctAnswer) {
    return listOfAnswers.map(answer => {
      return (
        {
          answer: answer,
          id: nanoid(),

        }
      )
    })
  }

  function shuffleAnswers(answerList) {
    return answerList.sort(() => Math.random() - 0.5)
  }

console.log(questions)
const questionnaireElement = questions.map((question,index, id) => {
  return (
    <Question 
    question={question.question}  
    key={question.id} 
    id={question.id}
    answers ={question.answers}
    />
  )

})

return (
  <main>
      {
         !quiz?
         <div className="app">
           <h1 className="quiz_title">Quizzical</h1>
           <p className="quiz_instruction">Instructions on how to play the game</p>
           <button className="startQuiz"
           onClick={startQuiz}
           >Start Quiz</button>
         </div>
         : questions.length > 0 ? 
          <div>
             {questionnaireElement}
             <div className= "btn-div">
               <button className="checkAnswers">Check Answers</button>
             </div>
             
          </div>
          
          :
          <h3 className="loading">Loading .....</h3>
         
        
      }
      
  </main>
);
}

