import React from "react";
import ReactDOM from "react-dom"
import './index.css';
import Question from "../src/components/question"

export default function App() {
  const [quiz, setQuiz] = React.useState(false)
  function startGame() {
    return(
      setQuiz(true)
    )

  }

  const questionElements = <Question/>
  return (
    <main>
      {
         !quiz?
         <div className="App">
           <h1>Quizzical</h1>
           <p>Instructions on how to play the game</p>
           <button
           onClick={startGame}
           >Start Quiz</button>
         </div>
         :
         <div>
           {questionElements}
         </div>
      }
       
    </main>
   
  );
}

