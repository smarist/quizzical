import React from "react"



export default function Question({handleClick, data: { question, correct_answer, incorrect_answers}}) {

    const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random()- 0.5)

    return (
        <div className="question">
            <h2 className="question-title" 
            onClick={handleClick()}
            dangerouslySetInnerHTML={{__html:question}}/>
            <div className="question-options"> 
               <div className="option"
               onClick={handleClick()}
               dangerouslySetInnerHTML={{__html:shuffleAnswers[0]}}/>
               <div className="option"
               onClick={handleClick()}
               dangerouslySetInnerHTML={{__html:shuffleAnswers[1]}}/>
               <div className="option"
               onClick={handleClick()}
               dangerouslySetInnerHTML={{__html:shuffleAnswers[2]}}/>
               <div className="option" 
               onClick={handleClick()}
               dangerouslySetInnerHTML={{__html:shuffleAnswers[3]}}/>
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