import React from "react";


export default function Answer (props) {

    let style = {}
       if(props.correct && props.checked){
           style ={
            backgroundColor: "#94D7A2", 
            color: "white" 
           }
        
       } else if(!props.correct && props.checked){
           style ={
            backgroundColor: props.isClicked ? "#F8BCBC" : ""
           }
       
       }else{
           style ={
            backgroundColor: props.isClicked? "#D6DBF5" : "", 
            cursor: "pointer"
           }
        
       }
       
    
    return (
        <div className="option"
             onClick={props.holdAnswer}
             style ={style}
               dangerouslySetInnerHTML={{__html:props.answer}}/>
    )
}