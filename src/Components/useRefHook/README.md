## useRef Hook

```js
const refContainer = useRef(initialValue);
```

-   returns a mutable ref object whose `.current property` is initialized to the passed argument to initialValue.
-   A common use case is to access a child imperatively.
-   Doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render.
-   Remembers the other component's data even component re-renders.

**Example**

```js
import React, { useState, useEffect, useRef } from "react";

function AdvanceUsage() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <br></br>
            <p align="center">
                Time -{timer}
                <br></br>
                {/*
                    // Won't work the way intended, not a global variable,
                       not rendered as jSX.
                    <button onClick={() => clearInterval(interval)}>
                        Clear Timer
                    </button>
                */}
                <button onClick={() => clearInterval(intervalRef.current)}>
                    Clear Timer
                </button>
            </p>
        </div>
    );
}

export default AdvanceUsage;
```
