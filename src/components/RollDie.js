import React, { useState } from 'react'
import '../App.css'

function RollDie(props) {

    return (
        <div>
            <p className="dice">
                {props.outcome}
            </p>
            <h3 className="ml-5 mt-0 text-light">Result</h3>
        </div>

    );
}

export default RollDie;
