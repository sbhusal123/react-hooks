## Use Memo Hooks

-   Used to memorize the output of the variable after heave computation.

**Example**

```js
import React, { useState, useMemo } from "react";

function Basics() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const increamentOne = () => {
        setCounterOne(state => state + 1);
    };

    const increamentTwo = () => {
        setCounterTwo(state => state + 1);
    };

    // Used to memorize the variable returned after heavy computation
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return counterOne % 2 === 0;
    }, [counterOne]);

    return (
        <div>
            <br></br>
            <p align="center">
                <button onClick={increamentOne}>Count One- {counterOne}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </p>
            <p align="center">
                <button onClick={increamentTwo}>Count Two- {counterTwo}</button>
            </p>
        </div>
    );
}

export default Basics;
```
