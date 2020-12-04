## useCallback

Tl, DR;

-   Use memo, memorizes the output of the function.
-   Use calllback memorizes the function itself. Checks for reference equality.

### 1. How does the rendering occurs Rendering?

-   Usually, when a component gets updated, handler and new dom for the component is reallocated in the memory(or redefined).

-   So everytime the props or state changes, every component and handler are redefined no matter we use useMemo or useCallback.

-   When not using optimization hooks, after updating component, the previous dom reference and associated handler is collected as a garbage value(i.e. memory is freed).

**Garbage Value:**

> In a language like C, when you define a variable, like: `int x` ;a small block of memory is allocated to the variable.
> However, we have only declared the variable, and not initialized it, which means that the block of memory that has been allocated to the variable still contains some value that has been left over from previous programs and operations. That value is called a garbage value. This may lead to erroneous results in programs.

## 2. How does those hooks affects.

-   When using useCallback hooks, after updating of component, previous associated handler is not collected as a garbage(previous component and the new component is stored in memory).

-   Now the output of the component before update and after update is compared and decided weather to re-render or not.

-   I.e. output is memorized

> So when you're using useCallback, you're basically storing a function in memory two times instead of one time with every re-render. It should really only be used for computationally expensive operations that you don't want to run very often and you'd like their results to be memoized, or if you need referential equality on your functions for some reason.

**Example - Non-optimal**

```js
// SubComponent
import React from "react";

export function Button(props) {
    console.log(`Button redered - ${props.text} `);
    return (
        <p align="center">
            <button onClick={props.handler}>{props.text}</button>
        </p>
    );
}

export function Count(props) {
    console.log(`Text rendered - ${props.text} Text`);
    return (
        <p align="center">
            {props.text} - {props.value}
        </p>
    );
}
```

```js
import React, { useState, useCallback } from "react";
import { Button, Count } from "./SubComponent";

function Basic() {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(100);

    const increamentAge = () => {
        setAge(age + 1);
    };

    const increamenSalary = () => {
        setSalary(salary + 1);
    };

    return (
        <div>
            <br />
            <Count text="Age" value={age} />
            <Button text="Increament Age" handler={increamentAge} />
            <br />
            <Count text="Salary" value={salary} />
            <Button text="Increament Salary" handler={increamenSalary} />
        </div>
    );
}

export default Basic;
```

Here we're not storing the previous computation value or memorizing the component(snap of component)
or function's output. So when one of the state variable (age/salary) changes. Whole component is re-rendered.

**Example - Optimal**

```js
import React, { useState, useCallback } from "react";
import { Button, Count } from "./SubComponent";

function Basic() {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(100);

    // Using callback to memorize the output of the function
    const increamentAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    // Using callback to memorize the output of the function
    const increamenSalary = useCallback(() => {
        setSalary(salary + 1);
    }, [salary]);

    return (
        <div>
            <br />
            <Count text="Age" value={age} />
            <Button text="Increament Age" handler={increamentAge} />
            <br />
            <Count text="Salary" value={salary} />
            <Button text="Increament Salary" handler={increamenSalary} />
        </div>
    );
}

export default Basic;
```

```js
// SubComponent
import React from "react";

function _Button(props) {
    console.log(`Button redered - ${props.text} `);
    return (
        <p align="center">
            <button onClick={props.handler}>{props.text}</button>
        </p>
    );
}

function _Count(props) {
    console.log(`Text rendered - ${props.text} Text`);
    return (
        <p align="center">
            {props.text} - {props.value}
        </p>
    );
}

// Memorizing the component or taking snap. Causes re-render only when props changes.
export const Button = React.memo(_Button);
export const Count = React.memo(_Count);
```

### 3. Difference Between useMemo and useCallback

The main difference between the two is that 'useCallback' returns a memoized callback and 'useMemo' returns a memoized value that is the result of the function parameter. Every other re-render will then get a cached function.

```js
function foo() {
    return "bar";
}

const memoizedCallback = useCallback(foo, []);
const memoizedResult = useMemo(foo, []);

memoizedCallback(); // 'bar'
console.log(memoizedCallback);
/* 
 ƒ foo() {
   return 'bar';
 }
*/

console.log(memoizedResult); // 'bar'
memoizedResult(); // 🔴 TypeError
```

[More at](https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60)
