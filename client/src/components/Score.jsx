import React from "react";



export default function Score(props) {
    const headstyle = {
        backgroundColor: 'black',
        color: 'white',
        height:'40px',
        textAlign: 'center'

    };

    return (
        <div className="col-12 pt-2" style={headstyle}>Score: {props.score} | Top Score: {props.topScore} </div>

    );
}


