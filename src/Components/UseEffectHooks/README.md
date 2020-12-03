## Use Effect Hooks

-   Render method would be too early to perform side effects.
-   Used to perform side effects. (upsating DOM, fetching data from an API.)
-   Close replacement for componentDidUpdate, ComponentDidUpdate and ComponentWillUnmount.
-   In the class based component, above lifecycle method might have same state to handle with same logic.
-   In such case, it causes code redundancy, so it's better to use useEffect hooks in such case.
-   This Hooks runs after every render of the component.

**Syntax**

```js
    useEffect(arrwoFunctionhandler, [state, to, watch, for]); // conditional for which params to re-execute
    // or
    useEffect(arrwoFunctionhandler); // for every rendering
    // or
    useEffect(arrwoFunctionhandler, [/* No dependency */]); // for first rendering

```

**Example**

```js
import React, { useState, useEffect } from "react";

function Foo() {
    const [count, setCount] = useState(0);

    // Runs after every render
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
        </div>
    );
}

export default Foo;
```

### 1. Conditional Re-rendering

-   Executing heavy task on every rendering slows down the response time.
-   UseEffect hooks provides a implementation through which we can pass the state and props that needs to be watch.

```js
function ConditionalReRendering() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // Runs when count state has updated.
    useEffect(() => {
        console.log("useEffect - Updating document title.");
        document.title = `You clicked ${count} times.`;
    }, [count]);

    // Runs when name state has updated.
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
```

## 2. Runing Effect Only Once

-   Sometimes we want to performs side effect only once when component gets mounted.
-   May be checking weather user is logged in or not in every component rendering.
-   To achieve such effect we pass the empty array in the dependency array.

```js
// Defining empty array in  the dependency list causes it to render only for first time
useEffect(
    () => {
        // Your action
        fetchData();
    },
    [
        /* No dependencies that causes it to re-render*/
    ]
);
```

## 3. Performing Cleanup when Component Unmount

-   When we bind the particular event listners when component mounts. Those event gets executed no matter the component is unmounted.

-   Performing cleanup is essential because those listners might cause memory leakage or slow down the response.

-   To avoid such problem we can perform some cleanup by hooking into the useEffect return value.

**Example:**

```js
// Defining empty array in  the dependency list causes it to render only for first time
useEffect(() => {
    console.log("useEffect called.");
    window.addEventListener("mousemove", logMousePosition); // should be detached on unmounting

    // Performing cleanup when component unmounts. Unbind the event listner on unmount
    return () => {
        console.log("Component Unmounted");
        window.removeEventListener("mousemove", logMousePosition);
    };
}, []);
```

## 4. Things to keep in mind.

```python
        If you think dependency array is a way to specifiy
        when you want to rerun the effect, the you're
        going to run into the problem.

        Instead dependency array can be thought of as a way to let react know
        about everything that the effect must watch for changes.
```

-   Instead of using single useEffect, use multiple effect with the appropriate dependencies.

-   If a useEffect performs a functional call with some state variables. That state variable needs be passed as
    depenecncy if necessary.

```js
function IntervalFunctional() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return (
        <div>
            <h2 align="center">{count}</h2>
        </div>
    );
}

export default IntervalFunctional;
```

The purpose of above code is to build a simple timer. As seen, we've a side effect that watches any chanages
for count state variable(dependency). The approach above can lead us to the problem as count state is changed, it allocates new memory location for interval variable.

Another problem with the approach is `setCount(count + 1)`. I.e it doesn't uses previous state value to update.

**Solution:**

```js
function IntervalFunctional() {
    const [count, setCount] = useState(0);

    // increament previous value by 1
    const tick = () => {
        setCount(prevCount => prevCount + 1);
        //setCount(count + 1); won't work the way intended
    };

    // Bind on initial render only
    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <br />
            <p align="center">From Functional Component</p>
            <h2 align="center">{count}</h2>
        </div>
    );
}
```
