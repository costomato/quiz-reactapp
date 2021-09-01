import React from "react";
import OptionBtn from "./OptionBtn";

const correctAnswers = []
function answerClick(questionId, optionId, clickedAnswer, correct, totalOptions, quizSize) {
    for (let i = 0; i < totalOptions; i++) {
        const btnId = questionId.toString().concat(i.toString());
        document.getElementById(btnId).style.background = '#4f75f1'
    }
    if (clickedAnswer === correct) {
        if (!correctAnswers.includes(questionId))
            correctAnswers.push(questionId)
        document.getElementById(optionId).style.background = '#04d46f'
    } else {
        if (correctAnswers.includes(questionId))
            correctAnswers.splice(correctAnswers.indexOf(questionId), 1)
        document.getElementById(optionId).style.background = '#f11b43'
    }
    document.getElementById('score').innerHTML = `Score: ${correctAnswers.length}/${quizSize}`
}

const questionStyle = {
    color: "white"
};

function getOptionButtons(props) {
    //because props.options array comes with duplicate value for correct answer idk why
    //so i created a new array which has no duplicate values
    //let me know if your figure out the reason for duplicate values
    const newArray = []
    props.options.forEach(element => {
        if (!newArray.includes(element))
            newArray.push(element)
    })
    return newArray.map(data =>
        <OptionBtn
            buttonId={props.id.toString().concat(newArray.indexOf(data).toString())}
            func={() => answerClick(props.id, props.id.toString().concat(newArray.indexOf(data).toString()), data.toString(), props.correct, newArray.length, props.quizSize)}
            text={data.toString()}/>)
}

export default function QuizInterface(props) {
    return (
        <div>
            <h5 style={questionStyle}>Question: {props.question}</h5>
            {getOptionButtons(props)}
        </div>
    )
}
