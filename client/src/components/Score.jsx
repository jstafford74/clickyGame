import React from "react";



export default function Score(props) {
    const headstyle = {
        backgroundColor: 'black',
        color: 'white',
        height: '40px',
        textAlign: 'center'

    };

    const titlestyle = {
        backgroundColor: 'black',
        color: 'green',
        height: '60px',
        fontSize: '2rem',
        textAlign:'center',
        fontWeight:'bold'
    }

    return (
        <div>
            <div className="col-12 pt-2" style={headstyle}>Score: {props.score} | Top Score: {props.topScore} </div>
            <div className="col-12 pt-2" style={titlestyle}> Monster Truck Memory Game </div>
        </div>
    );
}


