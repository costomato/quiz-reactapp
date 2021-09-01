import React from "react";

const btnStyle = {
    margin: 8,
    background: '#4f75f1'
};

export default function OptionBtn(props) {
    return (
        <button id={props.buttonId} onClick={props.func} style={btnStyle} type="button" className="btn btn-primary">{props.text}</button>
    )
}