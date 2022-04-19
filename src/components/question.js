import React from "react"
import Answer from "./answer"



export default function Question(props) {
 
    const answerElements = props.answers.map(answer=> {
        return (
            <Answer
            id={answer.id}
            key={answer.id}
            answer={answer.answer}/>
        )
    })

    

    return (
        <div className="question">
            <h2 className="question-title" 
            dangerouslySetInnerHTML={{__html: props.question}}
            />
            <div className="question-options"> 
               {answerElements}
            </div>
        </div>
    )
    
}

