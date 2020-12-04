## customHooks

-   Javascript function whose name starts with "use".
-   Can also call other hooks if required.
-   Used to share logic (Alternative to HOC and render Props)

**Example(Updating Document title)**

```js
// Hooks.js
import { useEffect } from "react";

export function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count  ${count}`;
    }, [count]);

    return <div></div>;
}
```

```js
// Update Document Title
import React, { useState } from "react";
import { useDocumentTitle } from "./Hooks";

function Basic() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            <br></br>
            <p align="center">
                <button onClick={() => setCount(count + 1)}>
                    Count - {count}
                </button>
            </p>
        </div>
    );
}

export default Basic;
```

# 2. Custom Hook Returning Array Of Function

```js
// Counter.js
import React, { useState } from "react";
import { useCounter } from "./Hooks";

function Counter() {
    const [count, increament, decreament, reset] = useCounter();

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
```

```js
// Hooks.js
import { useEffect, useState } from "react";

export function useCounter() {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreament = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return [count, increament, decreament, reset];
}
```

**Example - Using Hook With FormField**

```js
// Hooks.js
export function useInput(initialValue = "") {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    };

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value);
        }
    };

    return [value, bind, reset];
}
```

```js
// UserForm.js
import React from "react";
import { useInput } from "./Hooks";

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindLastName, resetLasttName] = useInput("");

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLasttName();
    };

    return (
        <div style={{ margin: "20% 30%" }}>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName} type="text"></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...bindLastName} type="text"></input>
                </div>
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
```
