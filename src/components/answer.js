import React from "react";


export default function Answer (props) {

    const style = {
        backgroundColor: props.isClicked ? "#008000" : "",
        color: props.isClicked? "white" : ""
    }
    return (
        <div className="option"
             onClick={props.holdAnswer}
             style ={style}
               dangerouslySetInnerHTML={{__html:props.answer}}/>
    )
}