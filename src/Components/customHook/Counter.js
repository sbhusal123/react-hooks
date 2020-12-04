import React, { useState } from "react";
import { useCounter } from "./Hooks";

function Counter() {
    const [count, increament, decreament, reset] = useCounter(10);

    return (
        <div>
            <p align="center">
                <h2>Count - {count}</h2>
                <br></br>
                <button onClick={increament}>Increament</button>
                <button onClick={decreament}>Decreament</button>
                <button onClick={reset}>Reset</button>
            </p>
        </div>
    );
}

export default Counter;
