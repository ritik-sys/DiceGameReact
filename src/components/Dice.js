import React, { useEffect, useState } from 'react'
import RollDie from '../components/RollDie'

function Dice() {
    let outcomes = []
    let count = []
    const [DiceQuantity, setDiceQuantity] = useState(1);
    const [FaceQuantity, setFaceQuantity] = useState(2);
    const [result, setResult] = useState([])
    const [sum, setSum] = useState(0)
    var x = 0;
    const getResult = (e) => {
        e.preventDefault();
        for (var i = 1; i <= DiceQuantity; i++) {
            var outcome = Math.floor(Math.random() * (FaceQuantity - 1 + 1)) + 1;
            outcomes.push(outcome)
            x = x + outcome
            count.push(i)
            setResult(outcomes)
        }
        setSum(x)
        console.log(outcomes);
    }


    return (
        <div class="container" >

            <div className="d-flex justify-content-center">
                <div class="row m-2">
                    <button type="button" class="btn btn-danger">NUMBER OF DICE </button>
                    <div class="btn text-light m-3"><h4>{DiceQuantity}</h4></div>
                    <button type="button" class="btn btn-warning btn-lg m-2" onClick={() => { setDiceQuantity(DiceQuantity + 1) }}>+</button>
                    <button type="button" class="btn btn-warning btn-lg m-2" onClick={() => { if (DiceQuantity == 1) { setDiceQuantity(1) } else { setDiceQuantity(DiceQuantity - 1) } }}>-</button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row m-2">
                    <button type="button" class="btn btn-danger">NUMBER OF FACES</button>
                    <div class="btn text-light m-3"><h4>{FaceQuantity}</h4></div>
                    <button type="button" class="btn btn-warning btn-lg m-2" onClick={() => { if (FaceQuantity == 6) { setFaceQuantity(6) } else { setFaceQuantity(FaceQuantity + 1) } }}>+</button>
                    <button type="button" class="btn btn-warning  btn-lg m-2" onClick={() => { if (FaceQuantity == 2) { setFaceQuantity(2) } else { setFaceQuantity(FaceQuantity - 1) } }}>-</button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div class="row m-2">
                    <button type="button" class="btn btn-info btn-lg mt-5" onClick={getResult}>ROLL DIE</button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                {result.map((x) => (
                    <RollDie outcome={x} />
                ))}
            </div>
            <div className="d-flex justify-content-center">
                {sum != 0 && <button type="button" class="btn btn-success btn-lg m-5"><h1>Sum of All Outcomes : {sum}</h1></button>}
            </div>
        </div>
    );
}

export default Dice;
