/*
    - Runing side effects on every update -> Slower time to response
    - Re-rendering or performing side effect only when some of the state variables has changes.
*/
import React, { useState, useEffect } from "react";

function ConditionalReRendering() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    /*
        - This effect runs only when the state variable inside [] is updated.
        - I.e only runs when count state has updated.
    */
    useEffect(() => {
        console.log("useEffect - Updating document title.");
        document.title = `You clicked ${count} times.`;
    }, [count]);

    useEffect(() => {
        console.log("useEffect - Updating name.");
    }, [name]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
        </div>
    );
}

export default ConditionalReRendering;
