import React from "react";

const style = {
    text: {
        color: '#fff',
        display: 'none',
        padding: 10
    },
    divStyle: {
        margin: 5
    }
}

export default function CorrectAnswer(props) {
    return (
        <div style={style.divStyle}>
            <h6 id={props.answerId} style={style.text}>Correct answer: {props.correctAnswer}</h6>
        </div>
    )
}