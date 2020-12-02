import React, { useState } from "react";

function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const increamentOne = () => {
        setCounterOne(counterOne + 1);
    };

    const increamentTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    return (
        <div>
            <div>
                <button onClick={increamentOne}>
                    CounterOne -{counterOne}
                </button>
            </div>
            <div>
                <button onClick={increamentTwo}>
                    CounterTwo -{counterTwo}
                </button>
            </div>
        </div>
    );
}

export default Counter;
