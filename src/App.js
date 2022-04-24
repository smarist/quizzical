import React, { useEffect } from "react";
import './index.css';
import Question from "../src/components/question"
import {nanoid} from "nanoid";


export default function App() {
  const [quiz, setQuiz] = React.useState(false)
  const [game, setGame] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [checked, setChecked] = React.useState(false)
  const [score, setScore] = React.useState(0)
  

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => setQuestions(getQuestions(data.results)))
  }, [game])

  function startQuiz(){
    setQuiz(prevQuiz => !prevQuiz)
  }

  function newGame(){
      setGame(prevQuiz => !prevQuiz)
      setScore(0)
      setChecked(false)
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
          correct: answer === correctAnswer? true : false,
          isClicked: false,
          clickedCorrect: false,
          clickedIncorrect: false,
          checked: false

        }
      )
    })
  }

  function shuffleAnswers(answerList) {
    return answerList.sort(() => Math.random() - 0.5)
  }



const questionnaireElement = questions.map((question,index, id) => {
  return (
    <Question 
    question={question.question}  
    key={question.id} 
    id={question.id}
    answers ={question.answers}
    holdAnswer={holdAnswer}
    />
  )

})




function holdAnswer(answerId, questionId) {
  setQuestions(prevQuestions => prevQuestions.map(question => {
    if(question.id === questionId){
      const answerList = question.answers.map(answer => {
        if(answer.id === answerId || answer.isClicked) {
          return (
            {
              ...answer,
              isClicked: !answer.isClicked
            }
          )
        } else {
          return answer
        }
      })
      return ({
        ...question,
        answers: answerList
      })
    } else {
      return question
    }
  }))
}

function checkAnswers(){
  setQuestions(prevQuestions => prevQuestions.map(question => {
    const checkedAnswers = question.answers.map(answer => {
      if(answer.isClicked && answer.correct){
        setScore(prevScore => prevScore + 1)
        return ({
          ...answer,
          clickedCorrect: true,
          checked: true
        })
      } else if(answer.isClicked && !answer.correct){
        return ({
          ...answer,
          clickedIncorrect: true,
          checked: true
        })
      } else {
        return ({
          ...answer,
          checked: true
        })
      }
    })
    return ({
      ...question,
      answers: checkedAnswers
    })
  }))
  setChecked(true)
}

return (
  <main>
      {
         !quiz?
         <div className="app">
              <h1 className="quiz_title">Quizzical</h1>
              <p className="quiz_instruction">Test your knowledge in Geography <span>😀</span></p>
              <button className="startQuiz"
              onClick={startQuiz}
              >Start Quiz</button>
         </div>
         : questions.length > 0 ? 
          <div>
             {questionnaireElement}
             {
               checked?  
               <div>
                 <span className="score">You scored {score}/5 correct answers</span>
                 <button 
                 className="newGame"
                 onClick ={() => newGame()}>Play again</button>
               </div> 
               : <div className= "btn-div">
               <button className="checkAnswers"
                onClick={() => checkAnswers()}>Check Answers</button>
            </div>
             }
             
          </div>
          :
          <h3 className="loading">Loading .....</h3>
         
      
        
      }
      
  </main>
);
}

