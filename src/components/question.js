import React from "react"
import ReactDOM from "react-dom"


export default function Question({data: { question, correct_answer, incorrect_answers}}, props) {

    const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random()- 0.5)

    return (
        <div className="question">
            <h2 className="question-title">{question}</h2>
            <div className="question-options"> 
               <div className="option">{shuffleAnswers[0]}</div>
               <div className="option">{shuffleAnswers[1]}</div>
               <div className="option">{shuffleAnswers[2]}</div>
               <div className="option">{shuffleAnswers[3]}</div>
            </div>
        </div>
    )
    
}

/*
    const answerElements =
    props.answers.map((answer)=> (
      <div className="option">{answer}</div>
    ))
    return (
        <div className="question">
            <h2 className="question-title">{props.question}</h2>
            <div className="question-options"> 
            <div className="option">{shuffleAnswers[0]}</div>
               <div className="option">{shuffleAnswers[1]}</div>
               <div className="option">{shuffleAnswers[2]}</div>
               <div className="option">{shuffleAnswers[3]}</div>
            </div>
        </div>
    )
    
}
*/