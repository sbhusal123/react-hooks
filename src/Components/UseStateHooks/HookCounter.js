import React, { useState } from "react";

/* 
    - Use state merges the state.
    - Set state doesn't merges the state.
*/

function HookCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Count {count}
            </button>
        </div>
    );
}

export default HookCounter;
