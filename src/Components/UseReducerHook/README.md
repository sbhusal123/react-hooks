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
        ....
    )
};
```
