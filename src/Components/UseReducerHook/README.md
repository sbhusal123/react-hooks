## Use-Reducer

-   Hook used for state management. Alternative to useState hooks.
-   Used to manage large and dependent state for functional component.
-   Similar to reduce method of the Array.Prototype.
-   Reducer takes the current state and the action to be handled and returns the new state.

**Syntax**

```js
import { useReducer } from "react";


const initialState = ....;
/*
    Reducer function takes currentState and action
*/
const reducerFunction = (currentState, action) => {
    switch(action){
        ......
    }
}

const foo = () => {
    // Returns the state and dispatch by which we can execute the state change
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <button onClick={() => dispatch('action')} />
        </div>
    )
};
```

## 2. Multiple Reducer

-   Can be used for the component with same state transition.
-   Reduces code duplication to manage state.
-   Same reducer function and initialState can be used.

**Example:**

```js
import React, { useReducer } from "react";

// Reducer
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increament":
            return state + 1;
        default:
            return state;
    }
};

function MultipleReducer() {
    // For the component with same state transition, multiple reducer can be used without duplicating code
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <div style={{ margin: "20%" }}>
            <div>
                <p>CountOne: {count}</p>
                <button
                    onClick={() => {
                        dispatch("increament");
                    }}
                >
                    IncreamentOne
                </button>
            </div>
            <br />
            <div>
                <p>CountTwo: {countTwo}</p>
                <button
                    onClick={() => {
                        dispatchTwo("increament");
                    }}
                >
                    IncreamentTwo
                </button>
                    ResetTwo
                </button>
            </div>
        </div>
    );
}

export default MultipleReducer;
```

## 3. Usage Wih useContext

-   Used for managing state and transition for nested component.
-   Can be used to manage different component state in the common parent component.

**Example**

```js
// Parent Component
import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increament":
            return state + 1;
        case "decreament":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function ParentComponent() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
            <div className="App" style={{ margin: "20%" }}>
                Count - {count}
                <ComponentA />
                <ComponentB />
            </div>
        </CountContext.Provider>
    );
}

export default ParentComponent;
```

```js
// ComponentA
import React, { useContext } from "react";
import { CountContext } from "./ParentComponent";

function ComponentA() {
    const countContext = useContext(CountContext);

    return (
        <div>
            <p>Component A</p>
            <button
                onClick={() => {
                    countContext.dispatch("increament");
                }}
            >
                Increament
            </button>
            <button
                onClick={() => {
                    countContext.dispatch("decreament");
                }}
            >
                Decreament
            </button>
            <button
                onClick={() => {
                    countContext.dispatch("reset");
                }}
            >
                Reset
            </button>
        </div>
    );
}

export default ComponentA;
```

```js
// ComponentB
import React, { useContext } from "react";
import { CountContext } from "./ParentComponent";

function ComponentB() {
    const countContext = useContext(CountContext);

    return (
        <div>
            <p>Component B</p>
            <button
                onClick={() => {
                    countContext.dispatch("increament");
                }}
            >
                Increament
            </button>
            <button
                onClick={() => {
                    countContext.dispatch("decreament");
                }}
            >
                Decreament
            </button>
            <button
                onClick={() => {
                    countContext.dispatch("reset");
                }}
            >
                Reset
            </button>
        </div>
    );
}

export default ComponentB;
```

## 4. Making Api Calls

```js
import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";

const initialState = {
    loading: true,
    error: "",
    post: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: ""
            };
        case "FETCH_ERROR":
            return {
                loading: false,
                post: [],
                error: "Something went wrong.."
            };
        default:
            return state;
    }
};

function DataFetchingOne() {
    const [state, disptach] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/2`)
            .then(res => {
                disptach({ type: "FETCH_SUCCESS", payload: res.data });
            })
            .catch(err => {
                disptach({ type: "FETCH_ERROR", payload: err.body });
            });
    }, []);

    return (
        <div>
            <p align="center">
                {state.loading ? "Loading..." : state.post.title}
            </p>
            <p align="center">{state.error == "" ? "" : state.error}</p>
        </div>
    );
}

export default DataFetchingOne;
```
