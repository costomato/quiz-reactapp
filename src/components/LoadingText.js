import React from "react";

const labelStyle = {
    color: "white"
};

export default function LoadingText() {
    return (
        <div className="mb-3">
            <h5 id="jsonHeading" style={labelStyle}>Loading quiz...</h5>
        </div>
    )
}