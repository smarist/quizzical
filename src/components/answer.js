import React from "react";


export default function Answer (props) {
    return (
        <div className="option"
               dangerouslySetInnerHTML={{__html:props.answer}}/>
    )
}