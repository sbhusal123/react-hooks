import React, { useState, useMemo } from "react";

function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const increamentOne = () => {
        setCounterOne(counterOne + 1);
    };

    const increamentTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    const isEven = useMemo(() => {
        let i = 0;
        // Simulating a delyed computation
        while (i < 200000000) {
            i++;
        }
        return counterOne % 2 === 0;
    }, [counterOne]);

    // Use Memo is executed when on of the dependency has changes. Used to reduce expensive calculation when component rerenders

    return (
        <div>
            <div>
                <button onClick={increamentOne}>
                    CounterOne -{counterOne}
                    <span>{isEven ? "Even" : "Odd"}</span>
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
