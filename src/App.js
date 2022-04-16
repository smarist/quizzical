import React, { useEffect } from "react";
import ReactDOM from "react-dom"
import './index.css';
import Question from "../src/components/question"
import {nanoid} from "nanoid";

export default function App() {
  const [quiz, setQuiz] = React.useState(false)
  const [questions, setQuestions] = React.useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => setQuestions(data.results))
  }, [])

  function startQuiz(){
    setQuiz(true)
  }
 
  console.log(questions)

  const id= nanoid()
const questionnaireElement = questions.map((question,index, id) => {
  return (
    <Question data={questions[index]} id={id} />
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
          <h3>Loading .....</h3>
         
        
      }
      
  </main>
);
}

