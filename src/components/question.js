import React from "react"
import Answer from "./answer"



export default function Question(props) {
    function holdAnswer(id){
        props.holdAnswer(id, props.id, props.isClicked)
    }
    const answerElements = props.answers.map(answer=> {
        return (
            <Answer
            id={answer.id}
            isClicked={answer.isClicked}
            key={answer.id}
            answer={answer.answer}
            holdAnswer={() => holdAnswer(answer.id, props.isClicked)}/>
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

