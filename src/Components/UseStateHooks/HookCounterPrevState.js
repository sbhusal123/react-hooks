import React, { useState } from "react";

/*
 * When we've to update the state based on prev state value use stateHandler with arrow function
 */

function HookCounterPrevState() {
    const initialCount = 0;

    // [state, stateHandler] = useState(initialValue)
    const [count, setCount] = useState(initialCount);

    const increamentFive = () => {
        for (var i = 0; i < 5; i++) {
            // setCount(count + 1); Caution: Increased by one only.
            setCount(prevCount => prevCount + 1);
        }
    };

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
            <button onClick={increamentFive}>Increament 5</button>
        </div>
    );
}

export default HookCounterPrevState;
